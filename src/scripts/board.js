import { snakeGame, cell } from "./variables.js";

const createBoard = () => {
    const board = document.querySelector("#board");
    const board_ctx = board.getContext("2d");
    let maxHeight = snakeGame.MAX_BOARD_HEIGHT;
    let maxWidth = snakeGame.MAX_BOARD_WIDTH;

    const numRows = Math.floor(maxHeight / cell.height);
    const numCols = Math.floor(maxWidth / cell.width);

    board_ctx.canvas.height = numRows * cell.height;
    board_ctx.canvas.width = numCols * cell.width;
};

export { createBoard }