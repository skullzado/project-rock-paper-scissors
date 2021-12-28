const ROCK = 'Rock';
const PAPER = 'Paper';
const SCISSORS = 'Scissors';

const CHOICES = [ROCK, PAPER, SCISSORS];

const rockBtn = document.querySelector('.rock');
const paperBtn = document.querySelector('.paper');
const scissorsBtn = document.querySelector('.scissors');
const result = document.querySelector('.result');
const scoreBoard = document.querySelector('.score-board');
const roundResult = document.querySelector('.round-result');
const gameResult = document.querySelector('.game-result');
const playerScore = document.querySelector('.player-score');
const computerScore = document.querySelector('.computer-score');
const resetPara = document.querySelector('.reset-para');

let playerWinCounter = 0;
let computerWinCounter = 0;

rockBtn.addEventListener('click', () => clickHandler('Rock'));
paperBtn.addEventListener('click', () => clickHandler('Paper'));
scissorsBtn.addEventListener('click', () => clickHandler('Scissors'));

function computerPlay() {
	return CHOICES[Math.floor(Math.random() * CHOICES.length)];
}

function outputString(str, choice1, choice2) {
	if (str === 'Win' || str === 'Lose') {
		roundResult.textContent = `You ${str}! ${choice1} beats ${choice2}`;
	} else {
		roundResult.textContent = `It's a ${str}! You both chose ${choice1}!`;
	}
}

function outputGameResult() {
	if (playerWinCounter === 5 && playerWinCounter > computerWinCounter) {
		gameResult.textContent = 'You Win!';
		outputEndGameString();
	} else if (
		computerWinCounter === 5 &&
		computerWinCounter > playerWinCounter
	) {
		gameResult.textContent = 'You Lose!';
		outputEndGameString();
	}
}

function outputEndGameString() {
	resetPara.textContent = 'Click any of the buttons to play again.';
}

function playRound(playerChoice, computerChoice) {
	let resultStr;

	if (playerChoice === computerChoice) {
		resultStr = 'Draw';
		outputString(resultStr, playerChoice, computerChoice);
	} else if (
		(playerChoice === ROCK && computerChoice === PAPER) ||
		(playerChoice === PAPER && computerChoice === SCISSORS) ||
		(playerChoice === SCISSORS && computerChoice === ROCK)
	) {
		resultStr = 'Lose';
		outputString(resultStr, computerChoice, playerChoice);
		computerWinCounter++;
	} else {
		resultStr = 'Win';
		outputString(resultStr, playerChoice, computerChoice);
		playerWinCounter++;
	}
}

function updateWinCounter() {
	playerScore.textContent = playerWinCounter;
	computerScore.textContent = computerWinCounter;
}

function clickHandler(playerChoice) {
	if (playerWinCounter === 5 || computerWinCounter === 5) {
		reset();
	} else {
		playRound(playerChoice, computerPlay());
		updateWinCounter();
		outputGameResult();
	}
}

function reset() {
	playerWinCounter = 0;
	computerWinCounter = 0;
	roundResult.textContent = '';
	gameResult.textContent = '';
	resetPara.textContent = '';
	updateWinCounter();
}
