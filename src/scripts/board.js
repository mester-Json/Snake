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