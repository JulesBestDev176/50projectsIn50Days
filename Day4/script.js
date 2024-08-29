const btn = document.getElementById("btn");
const input = document.querySelector("input");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  if (input.classList.contains("full")) {
    input.classList.remove("full");
    input.classList.add("none");
  } else {
    input.classList.add("full");
    input.classList.remove("none");
  }
});
