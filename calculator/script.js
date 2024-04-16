const numbers = document.querySelectorAll(".numbers");
console.log(numbers);
const operand = document.querySelectorAll(".operand");
console.log(operand);
const clearBtn = document.querySelector(".clear");
console.log(clearBtn);
const screenText = document.querySelector(".screen-text");
console.log(screenText);
const equalBtn = document.querySelector(".equal");

let current = 0;
let value = 0;
let operandValue = "";
let result = 0;
printNumber();

function printNumber() {
  numbers.forEach((e) => {
    e.addEventListener("click", () => {
      current = e.textContent;
      screenText.append(current);
      current = screenText.textContent;
      console.log(current);
      screenText.classList.add("screen-text-show");
    });
    saveCurrentValue(current);
  });
}

function saveCurrentValue(currentValue) {
  value = Number(currentValue);
  return value;
}

clearBtn.addEventListener("click", clear);

function clear() {
  screenText.textContent = "";
}

operand.forEach((e) => {
  e.addEventListener("click", () => {
    clear();
    console.log(saveCurrentValue(current));

    switch (e.textContent) {
      case "/":
        operandValue = "/";
        break;
      case "X":
        operandValue = "X";
        break;
      case "-":
        operandValue = "-";
        break;
      case "+":
        operandValue = "+";
        break;
    }
  });
});

equalBtn.addEventListener("click", () => {
  if (operandValue == "/") {
    result = Number(value) / Number(current);
    screenText.textContent = result;
  }

  if (operandValue == "X") {
    result = Number(value) * Number(current);
    screenText.textContent = result;
  }

  if (operandValue == "-") {
    result = Number(value) - Number(current);
    screenText.textContent = result;
  }

  if (operandValue == "+") {
    result = Number(value) + Number(current);
    screenText.textContent = result;
  }
});
