// ==============================
//       1_5
// ==============================

const buttonCounter = document.getElementById("clickMe");
let count = 0;

function counterFunction() {
    count += 1;
    buttonCounter.innerHTML = `Click me: ${count}`
}

// ==============================
//       1_6
// ==============================

let itemSelector = document.getElementById("my-select");
let textElement = document.getElementById("option-selected");

itemSelector.addEventListener("change", () => {
    textElement.textContent = `Sie haben ${itemSelector.value} ausgewählt`;
})

// ==============================
//       2_1
// ==============================

let appBg = document.getElementById("backgroundColor");
console.log(appBg)

function turnGray() {
    appBg.classList.add("grayButton");
    appBg.classList.remove("whiteButton")
    appBg.classList.remove("blueButton")
    appBg.classList.remove("yellowButton")
}

function turnWhite() {
    appBg.classList.remove("grayButton");
    appBg.classList.add("whiteButton")
    appBg.classList.remove("blueButton")
    appBg.classList.remove("yellowButton")
}

function turnBlue() {
    appBg.classList.remove("grayButton");
    appBg.classList.remove("whiteButton")
    appBg.classList.add("blueButton")
    appBg.classList.remove("yellowButton")
}

function turnYellow() {
    appBg.classList.remove("grayButton");
    appBg.classList.remove("whiteButton")
    appBg.classList.remove("blueButton")
    appBg.classList.add("yellowButton")
}