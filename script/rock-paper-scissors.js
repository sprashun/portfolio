let playerMove = '';
let computerMove = '';
let result1 = '';

const stats = JSON.parse(localStorage.getItem('stats')) || 
    {
        Win: 0,
        Lose: 0,
        Tie: 0
    }

function getComputerMove(){
    let computer = '';
    let randomNumber = Math.random();
    if (randomNumber >= 0 && randomNumber < 1/3){
        computer = 'rock';
    } else if (randomNumber >= 1/3 && randomNumber < 2/3){
        computer = 'paper';
    } else {
        computer = 'scissors';
    }
    return computer;
}

function getResult(computerMove){
    let result = '';
    if (computerMove === 'rock'){
        if (playerMove === 'rock'){
            result = 'Tie';
        } else if (playerMove === 'paper'){
            result = 'Win';
        } else{
            result = 'Lose';
        }
    } else if (computerMove === 'paper'){
        if (playerMove === 'rock'){
            result = 'Lose';
        } else if (playerMove === 'paper'){
            result = 'Tie';
        } else{
            result = 'Win';
        }
    } else if (computerMove === 'scissors') {
        if (playerMove === 'rock'){
            result = 'Win';
        } else if (playerMove === 'paper'){
            result = 'Lose';
        } else{
            result = 'Tie';
        }
    }
    return result;
}

function compareMove(result1) {
    if (result1 === 'Win'){
        stats.Win += 1;
    } else if (result1 === 'Lose'){
        stats.Lose += 1;
    } else if (result1 === 'Tie'){
        stats.Tie += 1;
    }

    localStorage.setItem('stats', JSON.stringify(stats));
    updateStatsElement();

}

function updateStatsElement() {
    document.querySelector( '.js-stats-card')
        .innerHTML = `Wins: ${stats.Win} Loses: ${stats.Lose} Ties: ${stats.Tie}`;
}

function showResultElement() {
    document.querySelector('.js-result')
        .innerHTML = `You ${result1}.`;
}

function showMovesElement() {
    document.querySelector('.js-moves-card')
        .innerHTML = 
        `You
        <img src="images/${playerMove}-emoji.png">
        <img src="images/${computerMove}-emoji.png">
        Computer `;
}

function executeFunctions(){
    computerMove = getComputerMove();
    result1 = getResult(computerMove);
    compareMove(result1);    
    showResultElement();
    showMovesElement();
}

