const container = document.querySelector(".container");
const cercle = document.querySelector(".cercle");
const menus = document.querySelector(".menus");

cercle.addEventListener("click", (e) => {
  if (container.classList.contains("rotatePage")) {
    container.classList.remove("rotatePage");
    cercle.classList.remove("rotateCercle");
    menus.classList.remove("menuAvant");
  } else {
    container.classList.add("rotatePage");
    cercle.classList.add("rotateCercle");
    menus.classList.add("menuAvant");
  }
});
