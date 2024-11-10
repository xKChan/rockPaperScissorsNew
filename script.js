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

function getHumanChoice() {
  let playerPick = prompt('Rock, Paper, or Scissors? ');
  return playerPick;
}

function playRound(humanChoice, computerChoice) {
  console.log(humanChoice, computerChoice);
}

playRound(getComputerChoice(), getHumanChoice());
