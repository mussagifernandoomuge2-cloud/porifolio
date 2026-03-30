document.addEventListener("DOMContentLoaded", () => {
  const orbita = document.getElementById("orbita");
  const nomeCompleto = document.getElementById("nomeCompleto");

  // 1) MFO gira por 2 segundos
  setTimeout(() => {
    orbita.classList.add("sumir");
    nomeCompleto.classList.add("mostrar");
  }, 2000);

  // 2) depois de aparecer o nome, espera 1 segundo e passa o vibranio cinzento
  setTimeout(() => {
    nomeCompleto.classList.add("vibranio");
  }, 3000);

  // 3) entra na página inicial
  setTimeout(() => {
    window.location.href = "home (2).html";
  }, 4300);
});