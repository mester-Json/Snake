const cell = {
    height: 24,
    width: 24
}

let movementKeys = {
    up: "z",
    down: "s",
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
    gameInterval: 100,
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