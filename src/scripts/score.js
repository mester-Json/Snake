
let initialScore = 0;
let currentScore = initialScore;

function updateScore() {
    currentScore += 100; // Ajoute 100 à chaque pomme mangée

    const scoreElement = document.getElementById("score");
    scoreElement.textContent = currentScore;
}

function resetScore() {
    initialScore = currentScore;
    currentScore = 0;

    const scoreElement = document.getElementById("score");
    scoreElement.textContent = currentScore;
}
const sortScoreBoard = () => {

    let users = [...document.querySelectorAll('.scoreboard .user')];
    const isNumeric = true;
    const selector = element => element.querySelector('.scoreboard .user-score').innerText;
    const collator = new Intl.Collator(undefined, { numeric: isNumeric, sensitivity: 'base' });
    // const parentElement = document.querySelector('.scoreboard #high-score')

    users.sort((userA, userB) => {
        const [firstUser, secondUser] = [userB, userA];
        const scoreOfFirstUser = selector(firstUser);
        const scoreOfSecondUser = selector(secondUser);
        return collator.compare(scoreOfFirstUser, scoreOfSecondUser)
    })// .forEach(element => parentElement.appendChild(element));
}

export { updateScore, sortScoreBoard, resetScore }