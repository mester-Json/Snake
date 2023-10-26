import { cell, food, snake } from "./variables.js"

const drawFood = () => {
    const board = document.querySelector("#board");
    const board_ctx = board.getContext("2d");

    const foodImg = new Image();
    foodImg.width = cell.width;
    foodImg.height = cell.height;
<<<<<<< HEAD
=======

    const ctx = document.querySelector("#board").getContext("2d");
>>>>>>> 20413d1c657eada8c3c2208d033d34bbc5a68583

    foodImg.addEventListener("load", () => {
        board_ctx.imageSmoothingQuality = "high";
        board_ctx.drawImage(foodImg, food.posX, food.posY, cell.width, cell.height);
    },
        false,
    );

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
            foodPosX = Math.floor(Math.random() * (maxPosX / cell.width - 1)) * cell.width;
        } while (foodPosX == snake.posX);

        return foodPosX
    }
    if (pos == 'posY') {
        let foodPosY;

        do {
            foodPosY = Math.floor(Math.random() * (maxPosY / cell.height - 1)) * cell.height;
        } while (foodPosY == snake.posY);

        return foodPosY
    }
    /* return [Math.floor(Math.random() * ((cell.width * gridSize) + 1)), Math.floor(Math.
        random() * ((cell.height * gridSize) + 1))]; */
};

export { drawFood, randomFoodPosition };