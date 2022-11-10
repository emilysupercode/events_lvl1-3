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
console.log(keyWrite)

let keyCodeWrite = document.querySelector("#keyCodeWrite");
console.log(keyCodeWrite)

let codeWrite = document.querySelector("#codeWrite");
console.log(codeWrite)

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