let value = 0;

const counter = document.querySelector(".counter");
const incrementBtn = document.querySelector("#incrementBtn");
const decrementBtn = document.querySelector("#decrementBtn");
const resetBtn = document.querySelector("#resetBtn");

incrementBtn.addEventListener("click", increase);
decrementBtn.addEventListener("click", decrease);
resetBtn.addEventListener("click", reset);

function increase() {
  value += 1;
  counter.textContent = value;
  decrementBtn.removeAttribute("disabled");
}

function decrease() {
  if (value != 0) {
    value -= 1;
    counter.textContent = value;
  } else {
    decrementBtn.setAttribute("disabled", "");
  }
}

function reset() {
  value = 0;
  counter.textContent = 0;
  decrementBtn.removeAttribute("disabled");
}
