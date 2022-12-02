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

// ==============================
//       2_2
// ==============================

let largeKeyCode = document.querySelector(".largeKeyCode");

let keyWrite = document.querySelector("#keyWrite");

let keyCodeWrite = document.querySelector("#keyCodeWrite");

let codeWrite = document.querySelector("#codeWrite");

window.addEventListener("keydown", (event) => {
    let key = event.key;
    let keyCode = event.which;
    let code = event.code;

    largeKeyCode.innerHTML = keyCode;
    keyWrite.innerHTML = key;
    keyCodeWrite.innerHTML = keyCode;
    codeWrite.innerHTML = code;
})

// ==============================
//       3_1
// ==============================

let count1 = 0;
let redInput = document.getElementById("redRange");
let greenInput = document.getElementById("greenRange");
let blueInput = document.getElementById("blueRange");
let colorOutputEl = document.getElementById("exercise3_1_output");

function changeBackground(userColor) {
    document.body.style.backgroundColor = userColor;
    colorOutputEl.textContent = userColor;
}

function valueToHex(c) {
    let hex = c.toString(16);
    return hex;
}

function rgbToHex(r, g, b) {
    return (valueToHex(r) + valueToHex(g) + valueToHex(b));
}

function changeHandle() {
    let red = Number(redInput.value);
    let green = Number(greenInput.value);
    let blue = Number(blueInput.value);
    document.body.style.backgroundColor = `rgb(${red},${green},${blue})`;

    let hexOutput = rgbToHex(red, green, blue);
    let hexOutputFinal = hexOutput.toUpperCase();

    colorOutputEl.textContent = `rgb(${red},${green},${blue}) = #${hexOutputFinal}`
}