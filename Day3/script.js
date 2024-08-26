const container = document.querySelector(".container");
const cercle = document.querySelector(".cercle");
const menu = document.querySelector(".menu");

cercle.addEventListener("click", (e) => {
  e.preventDefault();
  if (container.classList.contains("rotatePage")) {
    container.classList.remove("rotatePage");
    cercle.classList.remove("rotateCercle");
    menu.classList.remove("menuAvant");
  } else {
    container.classList.add("rotatePage");
    cercle.classList.add("rotateCercle");
    menu.classList.add("menuAvant");
  }
});
