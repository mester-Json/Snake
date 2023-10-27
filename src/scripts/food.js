import { cell, food, snake } from "./variables.js";

const drawFood = () => {
    const board = document.querySelector("#board");
    const board_ctx = board.getContext("2d");

    const foodImg = new Image();
    foodImg.width = cell.width;
    foodImg.height = cell.height;

    foodImg.addEventListener("load", () => {
        board_ctx.imageSmoothingQuality = "high";
        board_ctx.drawImage(foodImg, food.posX, food.posY, cell.width, cell.height);
    });

    foodImg.src = "./public/assets/media/apple.png";
}

const randomFoodPosition = (pos) => {
    const board = document.querySelector("#board");
    const board_ctx = board.getContext("2d");
    let maxPosX = board_ctx.canvas.width;
    let maxPosY = board_ctx.canvas.height;

    if (pos == 'posX') {
        let foodPosX;
        do {
            foodPosX = Math.floor(Math.random() * (maxPosX / cell.width)) * cell.width;
        } while (foodPosX == snake.posX);
        return foodPosX;
    }

    if (pos == 'posY') {
        let foodPosY;
        do {
            foodPosY = Math.floor(Math.random() * (maxPosY / cell.height)) * cell.height;
        } while (foodPosY == snake.posY);
        return foodPosY;
    }
};

export { drawFood, randomFoodPosition };
