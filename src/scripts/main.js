"use strict";

import { movementKeys } from './variables.js';
import { createBoard } from "./board.js";
import { drawFood, randomFoodPosition } from "./food.js";
import { createSnake, moveSnake } from "./snake.js";

const displayDifficultyPopup = () => {
    const popup = document.querySelector(".difficulty-popup");
    popup.classList.toggle("hidden");
};

document.addEventListener("DOMContentLoaded", () => {
    const pause = document.querySelector(".pause-window");
    const pauseBtn = document.querySelector(".pause-btn");

    pauseBtn.addEventListener("click", () => {
        pause.classList.toggle("hidden");
    });

    const resumeBtn = document.querySelector(".resume-btn");

    resumeBtn.addEventListener("click", () => {
        pause.classList.toggle("hidden");
    });

    createBoard();
    food.posX = randomFoodPosition("posX");
    food.posY = randomFoodPosition("posY");
    drawFood(food);
    createSnake();

    document.querySelector(".menu-content .difficulty-btn").addEventListener("click", displayDifficultyPopup);

    window.addEventListener("keydown", (event) => {
        let key = event.key;
        if (key == movementKeys.top) moveSnake("up");
        if (key == movementKeys.bottom) moveSnake("down");
        if (key == movementKeys.left) moveSnake("left");
        if (key == movementKeys.right) moveSnake("right");
    });

    const startButton = document.getElementById("start-button");
    const gameSection = document.querySelector(".game");
    const mainMenu = document.querySelector(".main-menu");

    startButton.addEventListener("click", function () {
        gameSection.classList.remove("hidden");
        mainMenu.classList.add("hidden");
    });
});

// Ne supprimez pas cette fonction !!!
function startGame() {
    createBoard();
    food.posX = randomFoodPosition("posX");
    food.posY = randomFoodPosition("posY");
    drawFood(food);
    createSnake();
}
startGame();

function gameOver() {
    alert('GAME OVER');
    const board = document.querySelector("#board");
    const board_ctx = board.getContext("2d");
    const mainMenu = document.querySelector(".main-menu");
    const gameSection = document.querySelector(".game");
    gameSection.classList.toggle("hidden");
    mainMenu.classList.toggle("hidden");
    board_ctx.clearRect(0, 0, board_ctx.canvas.width, board_ctx.canvas.height);
}

export { gameOver };
