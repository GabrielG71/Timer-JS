let data = new Date();
data.setHours(0, 0, 0);

let interval = null;

function atualizarHora() {
  const horaFormatada = data.toTimeString().slice(0, 8);
  document.getElementById("time").innerText = horaFormatada;
}

function incrementarHora() {
  data.setSeconds(data.getSeconds() + 1);
  atualizarHora();
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("btns-form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const buttonClicked = event.submitter;

    if (!buttonClicked) return;

    const buttonId = buttonClicked.id;

    if (buttonId == "iniciar") {
      if (!interval) {
        interval = setInterval(incrementarHora, 1000);
      }
    } else if (buttonId == "pausar") {
      clearInterval(interval);
      interval = null;
    } else {
      clearInterval(interval);
      interval = null;
      data.setHours(0, 0, 0);
      atualizarHora();
    }
  });
});
