"use strict";

import { createBoard } from "./board.js";
import { createFood } from "./food.js";

let movementKeys = {
    up: "z",
    down: "s",
    left: "q",
    right: "d"
}

const displayDifficultyPopup = () => {
    const popup = document.querySelector(".difficulty-popup");
    popup.classList.toggle("hidden");
}


document.addEventListener("DOMContentLoaded", () => {
    createBoard();
    createFood();
    document.querySelector(".menu-content .difficulty-btn").addEventListener("click", displayDifficultyPopup)
    /* window.addEventListener("keydown", (event) => {
        let key = event.key;
        key == movementKeys.up ? console.log("up") :
        key == movementKeys.down ? console.log("down") :
        key == movementKeys.left ? console.log("left") :
        key == movementKeys.right && console.log("right")
    }) */
})

// Start 
const startButton = document.getElementById("start-button");

const gameSection = document.querySelector(".game");

const mainMenu = document.querySelector(".main-menu");

startButton.addEventListener("click", () => {

    gameSection.classList.remove("hidden");

    mainMenu.classList.add("hidden");
});


// Difficulté
const difficulty = document.querySelector(".difficulty-popup");

const difficultySetting = difficulty.querySelectorAll('.dif-setting');

const difficultySpeed = {
    easy: 100,
    normale: 250,
    hard: 300,
    veryhard: 350,
    nigthmare: 450,
}

difficultySetting.forEach(element => {
    element.addEventListener('click', (event) => {
        const selectDifficulty = event.target.getAttribute('data-difficulty');
    });
});

/* const start = document.getElementById('start-button');
startButton.addEventListener('click', () => {
    const selectDifficulty =
}) */