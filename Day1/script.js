const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  card.addEventListener("click", (e) => {
    e.preventDefault();
    enleverClassFull();
    card.classList.add("full");
  });
});

function enleverClassFull() {
  cards.forEach((card) => {
    card.classList.remove("full");
  });
}
