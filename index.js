const ROCK = 'Rock';
const PAPER = 'Paper';
const SCISSORS = 'Scissors';

const CHOICES = [ROCK, PAPER, SCISSORS];

function computerPlay() {
	return CHOICES[Math.floor(Math.random() * CHOICES.length)];
}

function formatPlayerSelection(playerSelection) {
	const playerChoice =
		playerSelection[0].toUpperCase() +
		playerSelection.slice(1, playerSelection.length);
	return playerChoice;
}

function outputString(result, playerSelection, computerSelection) {
	if (result === 1) {
		console.log(`You Win! ${playerSelection} beats ${computerSelection}!`);
	} else if (result === -1) {
		console.log(`You Lose! ${computerSelection} beats ${playerSelection}!`);
	} else {
		console.log(`It's a Draw! You both chose ${computerSelection}!`);
	}
}

function playRound(playerSelection, computerSelection) {
	let playerChoice = playerSelection;
	let computerChoice = computerSelection;
	let result;

	if (playerSelection === computerSelection) {
		result = 0;
		outputString(result, playerChoice, computerChoice);
	} else if (
		(playerSelection === ROCK && computerSelection === PAPER) ||
		(playerSelection === PAPER && computerSelection === SCISSORS) ||
		(playerSelection === SCISSORS && computerSelection === ROCK)
	) {
		result = -1;
		outputString(result, playerChoice, computerChoice);
	} else {
		result = 1;
		outputString(result, playerChoice, computerChoice);
	}

	return result;
}

function game() {
	let playerChoice;
	let round = 1;
	let count = 0;

	while (round < 6) {
		playerChoice = prompt('Rock, Paper or Scissors?');
		count += playRound(formatPlayerSelection(playerChoice), computerPlay());
		round++;
	}

	if (count === 0) {
		console.log("It's a Draw!");
	} else if (count < 0) {
		console.log('Computer Wins!');
	} else {
		console.log('You Win!');
	}
}
