import { cell, food, snake } from './variables.js'
import { gameOver } from './main.js';
import { drawFood, randomFoodPosition } from './food.js';
import { updateScore } from './score.js';

// à voir si on utilise une class ou non pour le snake
/* class Snake {
    constructor(posX, posY) {
        this.posX = posX;
        this.posY = posY;
    }

    createSnake() {

        const board = document.querySelector("#board");
        const board_ctx = board.getContext("2d");

        board_ctx.fillStyle = 'green';
        board_ctx.fillRect(this.posX, this.posY, cell.width, cell.height)
    }

} */

// Fonction de création du serpent

const createSnake = () => {

    const board = document.querySelector("#board");
    const board_ctx = board.getContext("2d");

    board_ctx.fillStyle = 'green';
    /*     for (let i = 0; i < snake.tail.length; i++) {
            ctx.fillRect(snake.tail[i].x,
                snake.tail[i].y, cell.width, cell.height);
        } */

    board_ctx.fillRect(snake.posX, snake.posY, cell.width, cell.height)
}


function moveSnake(direction) {

    const board = document.querySelector("#board");
    const board_ctx = board.getContext("2d");
    board_ctx.clearRect(0, 0, board_ctx.canvas.width, board_ctx.canvas.height);
    drawFood(food);
    eatFood();

    if (direction === 'up') snake.posY -= cell.height;
    if (direction === 'down') snake.posY += cell.height;
    if (direction === 'left') snake.posX -= cell.height;
    if (direction === 'right') snake.posX += cell.height;


    // Fonction qui affiche "Game Over" si le serpent atteint les limites du plateau

    if (snake.posX < 0 || snake.posX >= board_ctx.canvas.width || snake.posY < 0 || snake.posY >= board_ctx.canvas.height) {

        gameOver();
    }

    // Fonction qui affiche "Game Over" si le serpent touche une partie de sa queue

    // function autoCollision(snake) {
    //     for (let i = 1; i < snake.tail.length; i++) {
    //         if (snake.posX === snake.tail[i].x && snake.posY === snake.tail[i].y) {
    //             gameOver();
    //         }
    //     }
    // }

    /*     for (let i = 0; i < snake.tail.length; i++) {
            board_ctx.fillRect(snake.tail[i].x, snake.tail[i].y, cell.width, cell.height)
       } */

    for (let i = 0; i < snake.tail.length - 1; i++) {
        snake.tail[i] = snake.tail[i + 1];
    }

    snake.tail[snake.size - 1] = { x: snake.posX, y: snake.posY };
    board_ctx.fillStyle = 'green';
    board_ctx.fillRect(snake.posX, snake.posY, cell.width, cell.height)

    createSnake();

}

function eatFood() {
    if (snake.posX === food.posX && snake.posY === food.posY) {
        snake.tail.length++;
        food.posX = randomFoodPosition("posX");
        food.posY = randomFoodPosition("posY");
        console.log(food.posY)
        drawFood(food);
        updateScore();
    }
}


// const updateSnake = () => {
//     for (let i = 0; i < snake.tail.length - 1; i++) {
//         snake.tail[i] = snake.tail[i + 1];
//     }
//     snake.tail[snake.total - 1] = { x: snake.posX, y: snake.posY };
// 
//     snake.posX += snake.speedX;
//     snake.posY += snake.speedY;
// }
// updateSnake()

export { createSnake, moveSnake }