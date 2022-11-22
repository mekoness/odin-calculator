const outputTop = document.querySelector("#output-top");
const outputMain = document.querySelector("#output-main");
const acBtn = document.querySelector("#ac-btn")
const cBtn = document.querySelector("#c-btn")
const equalsBtn = document.querySelector("#equals-btn")
const addBtn = document.querySelector("#add-btn")
const numBtns = document.querySelectorAll(".num");

let topValue = "";
let mainValue = 0;
let equation = "";
let result = 0;
outputTop.textContent = topValue;
outputMain.textContent = mainValue;

acBtn.addEventListener("click", () => {
    topValue = "";
    mainValue = 0;
    outputTop.textContent = topValue;
    outputMain.textContent = mainValue;
})

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

equalsBtn.addEventListener("click", evaluate)

function evaluate() {

};