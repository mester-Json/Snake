"use strict";

let movementKeys = {
    top: "z",
    bottom: "s",
    left: "q",
    right: "d"
}

const gameStart = () => {
    let mainMenu = document.querySelector(".main-menu");
    let gameWindow = document.querySelector(".game");
    mainMenu.classList.toggle("hidden");
    gameWindow.classList.toggle("hidden");
}

const displayDifficultyPopup = () => {
    const popup = document.querySelector(".difficulty-popup");
    popup.classList.toggle("hidden");
}

document.addEventListener("DOMContentLoaded", () => {

    document.querySelector(".menu-content .difficulty-btn").addEventListener("click", displayDifficultyPopup)
    /* window.addEventListener("keydown", (event) => {
        let key = event.key;
        key == movementKeys.top ? console.log("top") :
        key == movementKeys.bottom ? console.log("bottom") :
        key == movementKeys.left ? console.log("left") :
        key == movementKeys.right && console.log("right")
    }) */

    document.querySelector(".start-btn").addEventListener("click", gameStart);
})