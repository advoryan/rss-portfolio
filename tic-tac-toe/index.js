const container = document.querySelector('.container');
const cells = document.querySelectorAll('.cell');
const menu = document.querySelector('.menu');
const overlay = document.querySelector('.overlay');
const newGame = document.querySelectorAll('.newGame');
const highscoreBtn = document.querySelector('.highscore-btn');
const scoreMenu = document.querySelector('.score');
const scoreText = document.querySelector('.current-results');
const currentResult = document.querySelector('.results');
const winConditionsArr = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4 ,8],
    [2, 4, 6]
]
let turnCounter = 0;
let crossOrZero;
let winner;
let isAllFilled = true;
// currentResult.innerHTML = '';

const showHighscore = () => {
    scoreMenu.style.display = 'none';
    overlay.style.display = 'block';
    menu.style.display = 'flex';
}

const resultsShow = (crossOrZero) => {
    scoreText.innerHTML = '';
    if (crossOrZero === 'X') {
        winner = 'Crosses'
    } else if (crossOrZero === 'O') {
        winner = 'Noughts'
    } else {
        winner = 'Draw Game'
    }

    scoreMenu.style.display = 'flex';
    winner === 'Draw Game' ? 
        scoreText.innerHTML = `<span>${winner}</span><span>on ${turnCounter} move</span>` :
        scoreText.innerHTML = `<span>${winner} win!</span><span>on ${turnCounter} move</span>`

}

const filledCheck = () => {
    let fillCounter = 0;
    cells.forEach( e => e.innerHTML === '' && fillCounter++);
    return fillCounter;
    }

const winConditionLooker = (crossOrZero) => {
    for (let i = 0; i < winConditionsArr.length; i++) {
        if(
            cells[winConditionsArr[i][0]].innerHTML === crossOrZero &&
            cells[winConditionsArr[i][1]].innerHTML === crossOrZero &&
            cells[winConditionsArr[i][2]].innerHTML === crossOrZero
        ){
           return crossOrZero;
        } 
    }
    return undefined
}

const nextTurn = (event) => {
    if (event.target.innerHTML === '') {
        turnCounter % 2 === 0 ?
            crossOrZero = "X" :
            crossOrZero = "O";
        event.target.innerHTML = crossOrZero;
        turnCounter++;
        crossOrZero === "X" && event.target.classList.add("orange");

    }
    winConditionLooker(crossOrZero) && resultsShow(crossOrZero) //если победа
    !winConditionLooker(crossOrZero) && filledCheck() === 0 && resultsShow(crossOrZero='') //если заполены все - ничья
}

cells.forEach(cell => {
    cell.addEventListener('click', (event) => {
        event.target.innerHTML === '' && nextTurn(event)
    })
});

newGame.forEach(btns => {
    btns.addEventListener('click', () => document.location.reload())
});

highscoreBtn.addEventListener('click', showHighscore)


