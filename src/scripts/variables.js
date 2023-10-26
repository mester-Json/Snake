const cell = {
    height: 34,
    width: 34
}

let movementKeys = {
    top: "z",
    bottom: "s",
    left: "q",
    right: "d"
}

let food = {
    posX: 0,
    posY: 0
}

let snakeGame = {
    MAX_BOARD_WIDTH: 850,
    MAX_BOARD_HEIGHT: 550,
}

let snake = {
    posX: 0,
    posY: 0,
    size: 0,
    speedX: 0,
    speedY: 0,
    tail: []
}


export { cell, snakeGame, movementKeys, food, snake }