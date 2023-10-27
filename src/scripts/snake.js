import { cell, food, snake } from './variables.js';
import { gameOver } from './main.js';
import { drawFood, randomFoodPosition } from './food.js';
import { updateScore } from './score.js';

const board = document.querySelector("#board");
const board_ctx = board.getContext("2d");

let gameInterval; // Variable pour stocker l'intervalle de jeu

// Fonction de création du serpent
const createSnake = () => {
    board_ctx.fillStyle = 'green';

    // Dessinez la tête du serpent
    board_ctx.fillRect(snake.posX, snake.posY, cell.width, cell.height);

    // Dessinez chaque segment de la queue du serpent
    for (let i = 0; i < snake.tail.length; i++) {
        board_ctx.fillRect(snake.tail[i].x, snake.tail[i].y, cell.width, cell.height);
    }
    if (snake.posX === food.posX && snake.posY === food.posY) {
        food.posX = randomFoodPosition("posX");
        food.posY = randomFoodPosition("posY");
        updateScore();
        snake.size++;
    }
}

// Fonction pour démarrer le jeu
function startGame() {
    if (gameInterval) clearInterval(gameInterval);
    snake.direction = 'right'; // Initialiser la direction du serpent
    snake.size = 1;
    snake.tail = [];
    snake.speed = cell.width;
    randomFoodPosition(); // Générer la position initiale de la nourriture
    updateScore();
    createSnake();
    gameInterval = setInterval(() => {
        moveSnake();
    }, 100);
}
startGame()

// Fonction pour déplacer le serpent
function moveSnake() {
    board_ctx.clearRect(0, 0, board_ctx.canvas.width, board_ctx.canvas.height);

    // Sauvegardez la position précédente du serpent
    let prevX = snake.posX;
    let prevY = snake.posY;

    // Mettez à jour la position du serpent en fonction de sa direction actuelle
    if (snake.direction === 'up') snake.posY -= snake.speed;
    if (snake.direction === 'down') snake.posY += snake.speed;
    if (snake.direction === 'left') snake.posX -= snake.speed;
    if (snake.direction === 'right') snake.posX += snake.speed;

    // Vérifiez si le serpent a mangé la pomme
    if (snake.posX === food.posX && snake.posY === food.posY) {
        food.posX = randomFoodPosition("posX");
        food.posY = randomFoodPosition("posY");
        updateScore();
        snake.size++;
    }

    // Mettez à jour la queue du serpent
    if (snake.size > 1) {
        snake.tail.push({ x: prevX, y: prevY });
        while (snake.tail.length > snake.size - 1) {
            snake.tail.shift();
        }
    }
    // Dessinez le serpent et la pomme
    createSnake();
    drawFood(food);
    // Vérifiez les conditions de fin de jeu (collision avec les bords)
    if (
        snake.posX < 0 ||
        snake.posX >= board_ctx.canvas.width ||
        snake.posY < 0 ||
        snake.posY >= board_ctx.canvas.height ||
        checkCollision() // Ajoutez une fonction pour vérifier la collision avec le serpent lui-même
    ) {
        resetSnake()
        gameOver();
        clearInterval(gameInterval); // Arrêtez le jeu en cas de fin de jeu
    }
}

// Fonction pour vérifier la collision avec la queue
function checkCollision() {
    for (let i = 0; i < snake.tail.length; i++) {
        if (snake.posX === snake.tail[i].x && snake.posY === snake.tail[i].y) {
            gameOver(); // Arrêtez le jeu en cas de collision avec la queue du serpent
            return true;
        }
    }
    return false;
}

function resetSnake() {
    snake.posX = 0;
    snake.posY = 0;
    snake.direction = 'right';
    snake.size = 1;
    snake.tail = [];
}


// Gestion des touches du clavier pour changer la direction du serpent
document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowUp" && snake.direction !== 'down') {
        snake.direction = 'up';
    } else if (event.key === "ArrowDown" && snake.direction !== 'up') {
        snake.direction = 'down';
    } else if (event.key === "ArrowLeft" && snake.direction !== 'right') {
        snake.direction = 'left';
    } else if (event.key === "ArrowRight" && snake.direction !== 'left') {
        snake.direction = 'right';
    }
});
document.addEventListener("DOMContentLoaded", () => {
    startGame();
});


export { createSnake, moveSnake };
