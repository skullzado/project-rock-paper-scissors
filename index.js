const ROCK = 'Rock';
const PAPER = 'Paper';
const SCISSORS = 'Scissors';

const CHOICES = [ROCK, PAPER, SCISSORS];

function computerPlay() {
	return CHOICES[Math.floor(Math.random() * CHOICES.length)];
}

function playRound(playerSelection, computerSelection) {
	const playerChoice = playerSelection.toLowerCase();

	if (playerChoice === computerSelection.toLowerCase()) {
		return `It's a Draw! You both chose ${computerSelection}`;
	} else if (
		playerChoice === ROCK.toLowerCase() &&
		computerSelection === PAPER
	) {
		return 'You Lose! Paper beats Rock';
	} else if (
		playerChoice === PAPER.toLowerCase() &&
		computerSelection === SCISSORS
	) {
		return 'You Lose! Scissors beats Paper';
	} else if (
		playerChoice === SCISSORS.toLowerCase() &&
		computerSelection === ROCK
	) {
		return 'You Lose! Scissors beats Rock';
	} else {
		return `You Win! ${
			playerSelection[0].toUpperCase() +
			playerSelection.slice(1, playerChoice.length)
		} beats ${computerSelection}`;
	}
}
