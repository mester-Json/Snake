"use strict";

let movementKeys = {
    top: "z",
    bottom: "s",
    left: "q",
    right: "d"
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
})




const startButton = document.getElementById("start-button");


const gameSection = document.querySelector(".game");


const mainMenu = document.querySelector(".main-menu");

startButton.addEventListener("click", () => {

    gameSection.classList.remove("hidden");

    mainMenu.classList.add("hidden");
});
