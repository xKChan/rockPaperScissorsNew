const pickedRock = document.getElementById('rock');
const pickedPaper = document.getElementById('paper');
const pickedScissors = document.getElementById('scissors');
const roundWinner = document.getElementById('winner');
const score = document.getElementById('scoreBoard');
const mostPoints = document.getElementById('announceWinner');

pickedRock.addEventListener('click', clickedRock);
pickedPaper.addEventListener('click', clickedPaper);
pickedScissors.addEventListener('click', clickedScissors);

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let number = Math.random();
  if (number < 0.33) {
    return 'Rock';
  } else if (number > 0.66) {
    return 'Paper';
  } else {
    return 'Scissors';
  }
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice == computerChoice) {
    getScore('Tie', humanChoice, computerChoice);
    displayScore();
  } else if (
    (humanChoice == 'Rock' && computerChoice == 'Scissors') ||
    (humanChoice == 'Paper' && computerChoice == 'Rock') ||
    (humanChoice == 'Scissors' && computerChoice == 'Paper')
  ) {
    humanScore++;
    getScore('Player', humanChoice, computerChoice);
    displayScore();
  } else if (
    (humanChoice == 'Rock' && computerChoice == 'Paper') ||
    (humanChoice == 'Paper' && computerChoice == 'Scissors') ||
    (humanChoice == 'Scissors' && computerChoice == 'Rock')
  ) {
    computerScore++;
    getScore('Computer', humanChoice, computerChoice);
    displayScore();
  }
  if (humanScore == 5) {
    gameWinner('player');
  } else if (computerScore == 5) {
    gameWinner('computer');
  }
}

function clickedRock() {
  let computerSelection = getComputerChoice();
  playRound('Rock', computerSelection);
}

function clickedPaper() {
  let computerSelection = getComputerChoice();
  playRound('Paper', computerSelection);
}

function clickedScissors() {
  let computerSelection = getComputerChoice();
  playRound('Scissors', computerSelection);
}

function getScore(winner, humanPick, compPick) {
  if (winner == 'player') {
    roundWinner.textContent = `You Win! ${humanPick} beats ${compPick}`;
  } else if (winner == 'computer') {
    roundWinner.textContent = `You Lose! ${humanPick} loses to ${compPick}`;
  } else {
    roundWinner.textContent = `No one Wins ! It's a Tie. `;
  }
}

function displayScore() {
  score.textContent = `Player: ${humanScore} // Computer: ${computerScore}`;
}

function gameWinner(winner) {
  if (winner == 'player') {
    mostPoints.textContent = `Congrats!! You Win`;
  } else if (winner == 'computer') {
    mostPoints.textContent = 'Sorry, You lost. Better luck next time';
  }
}
