
/* if (snakeBody.some((segment) => segment[0] === foodX && segment[1] === foodY)) {
    placeFood();
} */

let score = 0;
let highScore = 0;

function updateScore() {
    score++;
    document.querySelector('#score-value').textContent = score;

    // if (score > highScore) {
    //     highScore = score;
    //     document.querySelector('.high-score').textContent = 'HIGH SCORE: ' + highScore;
    // }
}

export { updateScore }