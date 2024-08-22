const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  card.classList.remove("full");
  card.addEventListener("click", (e) => {
    e.preventDefault();
    removeFullClass();
    card.classList.add("full");
    card.querySelector("h2").removeAttribute("hidden");
  });
});

function removeFullClass() {
  cards.forEach((card) => {
    card.classList.remove("full");
    card.querySelector("h2").setAttribute("hidden", true);
  });
}
