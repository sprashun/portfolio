let playerMove = '';
let computerMove = '';
let result1 = '';

const stats = JSON.parse(localStorage.getItem('stats')) || 
    {
        Win: 0,
        Lose: 0,
        Tie: 0
    }

updateStatsElement();

function getComputerMove(){
    let computer = '';
    let randomNumber = Math.random();
    if (randomNumber >= 0 && randomNumber < 1/3){
        computer = 'Rock';
    } else if (randomNumber >= 1/3 && randomNumber < 2/3){
        computer = 'Paper';
    } else {
        computer = 'Scissors';
    }
    return computer;
}

function getResult(computerMove){
    let result = '';
    if (computerMove === 'Rock'){
        if (playerMove === 'Rock'){
            result = 'Tie';
        } else if (playerMove === 'Paper'){
            result = 'Win';
        } else{
            result = 'Lose';
        }
    } else if (computerMove === 'Paper'){
        if (playerMove === 'Rock'){
            result = 'Lose';
        } else if (playerMove === 'Paper'){
            result = 'Tie';
        } else{
            result = 'Win';
        }
    } else if (computerMove === 'Scissors') {
        if (playerMove === 'Rock'){
            result = 'Win';
        } else if (playerMove === 'Paper'){
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

    //alert(`Your Move: ${playerMove}\nComputer Move: ${computerMove}\nWins: ${stats.Win} Loses: ${stats.Lose} Ties: ${stats.Tie}`);
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
        .innerHTML = `You ${playerMove} ${computerMove} Computer`;
}