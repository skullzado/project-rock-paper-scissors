const ROCK = 'Rock';
const PAPER = 'Paper';
const SCISSORS = 'Scissors';

const CHOICES = [ROCK, PAPER, SCISSORS];

function computerPlay() {
	return CHOICES[Math.floor(Math.random() * CHOICES.length)];
}
