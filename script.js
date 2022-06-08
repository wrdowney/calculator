const numberButtons = document.querySelectorAll(".number");
const display = document.querySelector(".current-display");
const lastDisplay = document.querySelector(".last-display");
const operatorButtons = document.querySelectorAll(".operator")
const clearButton = document.getElementById("clear");
const deleteButton = document.getElementById("delete");
let numOne = '';
let numTwo = '';
let currentOperation = null;
let clearDisplay = false;

clearButton.addEventListener("click", () => clear());
deleteButton.addEventListener("click", () => deleteNumber());

operatorButtons.forEach((button) =>
    button.addEventListener("click", () => setOperator(button.textContent))
)

numberButtons.forEach((button) =>
    button.addEventListener("click", () => appendNumber(button.textContent))
)

function setOperator(op) {
    if(currentOperation !== null) {
        evaluate();
    }
    numOne = display.textContent;
    currentOperation = op;
    lastDisplay.textContent = `${numOne} ${currentOperation}`;
    clearDisplay = true;
}

function resetScreen() {
    display.textContent = ''
    clearDisplay = false
}
  
function clear() {
    display.textContent = '0'
    lastDisplay.textContent = ''
    numOne = ''
    numTwo = ''
    currentOperation = null
}
  
function appendPoint() {
    if (clearDisplay) resetScreen()
    if (display.textContent === '')
      display.textContent = '0'
    if (display.textContent.includes('.')) return
    display.textContent += '.'
}
  
function deleteNumber() {
    display.textContent = display.textContent.toString().slice(0, -1)
}

function appendNumber(num) {
    if (display.textContent === '0' || clearDisplay)
        resetScreen()
    display.textContent += num;
}

function evaluate() {
    if (currentOperation === null || clearDisplay) return
    if (currentOperation === '/' && display.textContent === '0') {
        alert("can't divide by 0")
        return
     }
    numTwo = display.textContent
    display.textContent = roundResult(
        operate(currentOperation, numOne, numTwo)
    )
    lastDisplay.textContent = `${numOne} ${currentOperation} ${numTwo} =`
    currentOperation = null;
}

function add(a, b) {
    return a + b
  }
  
  function substract(a, b) {
    return a - b
  }
  
  function multiply(a, b) {
    return a * b
  }
  
  function divide(a, b) {
    return a / b
  }
  
  function operate(operator, a, b) {
    a = Number(a)
    b = Number(b)
    switch (operator) {
      case '+':
        return add(a, b)
      case '−':
        return substract(a, b)
      case '×':
        return multiply(a, b)
      case '/':
        if (b === 0) return null
        else return divide(a, b)
      default:
        return null
    }
  }

  function roundResult(number) {
    return Math.round(number * 1000) / 1000
  }