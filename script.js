const outputTop = document.querySelector("#output-top");
const outputMain = document.querySelector("#output-main");
const acBtn = document.querySelector("#ac-btn");
const cBtn = document.querySelector("#c-btn");
const equalsBtn = document.querySelector("#equals-btn");
const operatorBtns = document.querySelectorAll(".op");
const numBtns = document.querySelectorAll(".num");

let a = 0;
let b = 0;
let result = 0;
let topValue = "";
let mainValue = 0;
let operator = "";
outputTop.textContent = topValue;
outputMain.textContent = mainValue;

acBtn.addEventListener("click", () => {
    topValue = "";
    mainValue = 0;
    result = 0;
    outputTop.textContent = topValue;
    outputMain.textContent = mainValue;
});

cBtn.addEventListener("click", () => {
    topValue = topValue.slice(0, -1);
    mainValue = 0;
    outputTop.textContent = topValue;
    outputMain.textContent = mainValue;
});

numBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        topValue += btn.innerText;
        mainValue = btn.innerText;
        outputTop.textContent = topValue;
        outputMain.textContent = mainValue;
    });
});

operatorBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        save(btn.textContent, btn);
    });
});

function save(op, btn) {
    operator = op;
    topValue += btn.innerText;
    outputTop.textContent = topValue;
    console.log(operator);
    a = Number(mainValue);
}

equalsBtn.addEventListener("click", () => evaluate(operator, a));

function evaluate(operator, a) {
    b = Number(mainValue);
    switch (operator) {
      case "+":
        result = addition(a, b);
        break;
      case "−":
        result = subtract(a, b);
        break;
      case "×":
        result = multiply(a, b);
        break;
      case "÷":
        if (b === 0) {
            result = "ERROR";
        }
        else {
            result = divide(a, b);
        }
        break;
      default:
        return;
    };
    topValue = "";
    outputTop.textContent = topValue;
    mainValue = result;
    outputMain.textContent = mainValue;

  };

  function addition(a, b) {
    return a + b;
  }
  
function subtract(a, b) {
    return a - b;
  }
  
function multiply(a, b) {
    return a * b;
  }
  
function divide(a, b) {
    return a / b;
  }