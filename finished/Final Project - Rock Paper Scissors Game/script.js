'use strict';

//SCORE CONTAINERS
const playerScoreContainer = document.querySelector('.player-score-container');
const computerScoreContainer = document.querySelector(
  '.computer-score-container'
);

//SCORES
const playerScore = document.querySelector('.player-score');
const computerScore = document.querySelector('.computer-score');

// BUTTONS
const rockBtn = document.querySelector('.rock');
const paperBtn = document.querySelector('.paper');
const scissorsBtn = document.querySelector('.scissors');
const resetBtn = document.querySelector('.reset');

// INFO MESSAGES
const resultMessageText = document.querySelector('.result-text');
const playerMessageText = document.querySelector('.player-choose-text');
const computerMessageText = document.querySelector('.computer-choose-text');

let playerCurrentScore = 0;
let computerCurrentScore = 0;

function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function getResult(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return 'TIE!';
  } else if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
  ) {
    playerCurrentScore += 1;
    playerScore.textContent = playerCurrentScore;
    gameOver();
    return 'You WON!';
  } else {
    computerCurrentScore += 1;
    computerScore.textContent = computerCurrentScore;
    gameOver();
    return 'Computer WON!';
  }
}

function displayMessages(result, playerChoice, computerChoice) {
  resultMessageText.textContent = result;
  playerMessageText.textContent = `Player chose: ${playerChoice.toUpperCase()}`;
  computerMessageText.textContent = `Computer chose: ${computerChoice.toUpperCase()}`;
}

function gameOver() {
  if (playerCurrentScore === 10) {
    playerScoreContainer.style.backgroundColor = 'green';
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
  } else if (computerCurrentScore === 10) {
    computerScoreContainer.style.backgroundColor = 'green';
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
  }
}

function playGame(playerChoice) {
  const computerChoice = getComputerChoice();
  const result = getResult(playerChoice, computerChoice);
  displayMessages(result, playerChoice, computerChoice);
  console.log(playerChoice, computerChoice);
}

function resetGame() {
  playerMessageText.textContent = '';
  computerMessageText.textContent = '';
  resultMessageText.textContent = '';
  playerScore.textContent = 0;
  computerScore.textContent = 0;
  computerCurrentScore = 0;
  playerCurrentScore = 0;

  rockBtn.disabled = false;
  paperBtn.disabled = false;
  scissorsBtn.disabled = false;

  playerScoreContainer.style.backgroundColor = 'rgba(88, 88, 88, 0.7)';
  computerScoreContainer.style.backgroundColor = 'rgba(88, 88, 88, 0.7)';
}

getComputerChoice();

rockBtn.addEventListener('click', () => {
  playGame('rock');
});
paperBtn.addEventListener('click', () => {
  playGame('paper');
});
scissorsBtn.addEventListener('click', () => {
  playGame('scissors');
});
resetBtn.addEventListener('click', () => {
  resetGame();
});
