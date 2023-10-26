<<<<<<< HEAD
snakeGame.getBlockWidth = () => {
    return blockWidth;
}

snakeGame.getBlockHeight = () => {
    return blockHeight;
}

const createPlayingField = () => {
    fieldGrid = [];
    numfieldCols = fieldWidth / getBlockWidth;
    numfieldRows = fieldHeight / blockHeight;

    for (let row = 0; row < numfieldRows; row++) {
        fieldGrid[row] = [];
        for (let col = 0; col < numfieldCols; col++) {
            if (col === 0 || row === 0 || col === (numfieldCols - 1) || row === (numfieldRows - 1)) {
                fieldGrid[row][col] = 1;
            } else {
                fieldGrid[row][col] = 0;
            }
        }
    }
}

export { createPlayingField }
=======
import { snakeGame } from "./variables.js";


const createBoard = () => {
    const board = document.querySelector("#board");
    const board_ctx = board.getContext("2d");

    board_ctx.canvas.height = snakeGame.BOARD_HEIGHT;
    board_ctx.canvas.width = snakeGame.BOARD_WIDTH;
}

export {createBoard}
>>>>>>> 149881c4d2fc25e74c14c58b5e4e2ab5b9f2ed40
