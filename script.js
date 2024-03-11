const prev = document.getElementById("prev");
const next = document.getElementById("next");
const numbers = document.querySelectorAll(".number");
const progressBar = document.getElementById("progress-bar");

let currentActive = 1;

next.addEventListener("click", () => {
  currentActive++;

  if (currentActive > numbers.length) {
    currentActive = numbers.length;
  }

  change();
});

prev.addEventListener("click", () => {
  currentActive--;

  if (currentActive < 1) {
    currentActive = 1;
  }

  change();
});

function change() {
  numbers.forEach((number, index) => {
    if (index < currentActive) {
      number.classList.add("active");
    } else {
      number.classList.remove("active");
    }

    const actives = document.querySelectorAll(".active");

    progressBar.style.width =
      ((actives.length - 1) / (numbers.length - 1)) * 100 + "%";
  });
}
