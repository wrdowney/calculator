let numberButtons = document.querySelectorAll(".number");
let display = document.querySelector(".display");
let numOne = '';
let numTwo = '';
let currentOperation = null;
let clearDisplay = false;

numberButtons.forEach((button) =>
    button.addEventListener("click", () => appendNumber(button.textContent))
)

function appendNumber(num) {
    numOne += num;
    display.textContent = numOne;
}