import {cell, snakeGame} from "./variables.js"

const createFood = () => {
    let maxPosY = snakeGame.BOARD_HEIGHT;
    let maxPosX = snakeGame.BOARD_WIDTH;

    let foodPosY = Math.floor(Math.random() * maxPosY / cell.height) * cell.height - cell.height;
    let foodPosX = Math.floor(Math.random() * maxPosX / cell.width) * cell.width - cell.width;

    const foodImg = new Image();
    foodImg.width = cell.width;
    foodImg.height = cell.height;
    console.log(foodImg);
    const ctx = document.querySelector("#board").getContext("2d");

    foodImg.addEventListener("load", () => {
        ctx.imageSmoothingQuality = "high";
        ctx.drawImage(foodImg, foodPosX, foodPosY, cell.width, cell.height);
        },
        false,
    );
    foodImg.src = "/3WAcademy/JSAVANCE/SnakeGame/Snack/public/assets/media/apple.png";
}

export {createFood}