const cercle = document.querySelectorAll(".cercle");
const trait = document.querySelectorAll(".trait");
const next = document.getElementById("next");
const prev = document.getElementById("prev");

let index = 0;

actionNext = () => {
  if (index == trait.length - 1) {
    next.classList.remove("backgroundBlue");
    next.classList.add("backgroundGrey");
    next.setAttribute("disabled", true);
  } else {
    prev.classList.remove("backgroundGrey");
    prev.classList.add("backgroundBlue");
    prev.removeAttribute("disabled");
  }
  if (!trait[index].classList.contains("borderBlue")) {
    trait[index].classList.add("borderBlue");
    cercle[index + 1].classList.add("borderBlue");
  }
  index++;
};

actionPrev = () => {
  index--;
  if (index == 0) {
    prev.classList.remove("backgroundBlue");
    prev.classList.add("backgroundGrey");
    prev.setAttribute("disabled", true);
  } else {
    next.classList.remove("backgroundGrey");
    next.classList.add("backgroundBlue");
    next.removeAttribute("disabled");
  }

  if (trait[index].classList.contains("borderBlue")) {
    trait[index].classList.remove("borderBlue");
    cercle[index + 1].classList.remove("borderBlue");
  }
};

next.addEventListener("click", (e) => {
  e.preventDefault();
  actionNext();
});

prev.addEventListener("click", (e) => {
  e.preventDefault();
  actionPrev();
});
