const container = document.querySelector('.container');
const cells = document.querySelectorAll('.cell');
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

const resultsShow = (crossOrZero) => {
    if (crossOrZero === 'X') {
        winner = 'крестики'
    } else if (crossOrZero === 'O') {
        winner = 'нолики'
    } else {
        winner = 'ничья'
    }
    // winner === 'ничья' ? console.log(`Ничья!`) : console.log(`Победили ${winner}`)
    

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
        turnCounter++
    }
    winConditionLooker(crossOrZero) && resultsShow(crossOrZero) //если победа
    !winConditionLooker(crossOrZero) && filledCheck() === 0 && resultsShow(crossOrZero='') //если заполены все - ничья
}

cells.forEach(cell => {
    cell.addEventListener('click', (event) => {
        event.target.innerHTML === '' && nextTurn(event)
    })
});




