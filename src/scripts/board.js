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

    for (let row = 0; row < numBoardRows; row++) {
        me.grid[row] = [];
        for (let col = 0; col < numBoardCols; col++) {
            if (col === 0 || row === 0 || col === (numBoardCols-1) || row === (numBoardRows-1)) {
                me.grid[row][col] = 1;
            } else {
                me.grid[row][col] = 0;
            }
        }
    }
}

export {createPlayingField}