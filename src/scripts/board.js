import { snakeGame } from "./variables.js";


const createBoard = () => {
    const board = document.querySelector("#board");
    const board_ctx = board.getContext("2d");

    board_ctx.canvas.height = snakeGame.BOARD_HEIGHT;
    board_ctx.canvas.width = snakeGame.BOARD_WIDTH;
}

export {createBoard}