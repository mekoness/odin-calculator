const outputTop = document.querySelector("#output-top");
const outputMain = document.querySelector("#output-main");

let a = 0;
let b = 0;
let result = 0;
let topValue = "";
let mainValue = "";
let operator = "";

document.addEventListener("click", (e) => {
    if (e.target.id === "ac-btn") {
        topValue = "";
        mainValue = "";
        result = 0;
        render()
    } else if (e.target.id === "equals-btn") {
        evaluate(operator, a)
    } else if (e.target.className === "btn op") {
        save(e.target.textContent);
    } else if (e.target.className === "btn num") {
        mainValue += e.target.innerText;
        render()
    };
});

function render() {
    outputTop.textContent = topValue;
    outputMain.textContent = mainValue;
}

render()

function save(op) {
    operator = op;
    outputTop.textContent = topValue;
    a = Number(mainValue);
    mainValue = "";
};

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
    topValue = result;
    mainValue = result;
    render()
};

function addition(a, b) {
    return a + b;
};
  
function subtract(a, b) {
    return a - b;
};
  
function multiply(a, b) {
    return a * b;
};
  
function divide(a, b) {
    return a / b;
};