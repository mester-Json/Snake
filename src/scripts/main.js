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
const snakeHead = document.querySelector('.snake');


startButton.addEventListener("click", () => {
    gameSection.classList.remove("hidden");
    mainMenu.classList.add("hidden");

    startGame();
});

const difficulty = document.querySelector(".difficulty-popup");
const difficultySetting = difficulty.querySelectorAll('.dif-setting');
const difficultySpeed = {
    easy: 100,
    normale: 250,
    hard: 300,
    veryhard: 350,
    nigthmare: 450,
}

let score = 0;
let snakeX = 0;
let snakeY = 0;
let foodX = 0;
let foodY = 0;
let direction = 'right';

function randomPosition() {
    return Math.floor(Math.random() * 15) * 20;
}

function updateFoodPosition() {
    foodX = randomPosition();
    foodY = randomPosition();
    food.style.left = foodX + 'px';
    food.style.top = foodY + 'px';
}

function updateScore() {
    score++;
    document.getElementById('score').textContent = 'Score: ' + score;
}

function startGame() {
    document.addEventListener('keydown', (event) => {
        switch (event.key) {
            case 'ArrowUp':
                if (direction !== 'down') direction = 'up';
                break;
            case 'ArrowDown':
                if (direction !== 'up') direction = 'down';
                break;
            case 'ArrowLeft':
                if (direction !== 'right') direction = 'left';
                break;
            case 'ArrowRight':
                if (direction !== 'left') direction = 'right';
                break;
        }
    });

    function moveSnake() {
        if (direction === 'up') snakeY -= 20;
        if (direction === 'down') snakeY += 20;
        if (direction === 'left') snakeX -= 20;
        if (direction === 'right') snakeX += 20;

        snakeHead.style.left = snakeX + 'px';
        snakeHead.style.top = snakeY + 'px';

        if (snakeX === foodX && snakeY === foodY) {
            updateScore();
            updateFoodPosition();
        }

        if (snakeX < 0 || snakeX >= 300 || snakeY < 0 || snakeY >= 300) {
            alert('Game Over! Your score: ' + score);
        } else {
            setTimeout(moveSnake, difficultySpeed.easy);
        }
    }

    updateFoodPosition();
    moveSnake();
}