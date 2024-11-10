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
  let playerPickConverted =
    playerPick.charAt(0).toUpperCase() + playerPick.slice(1).toLowerCase();
  return playerPickConverted;
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice == computerChoice) {
    console.log('Tie! No one wins.');
  } else if (
    (humanChoice == 'Rock' && computerChoice == 'Scissors') ||
    (humanChoice == 'Paper' && computerChoice == 'Rock') ||
    (humanChoice == 'Scissors' && computerChoice == 'Paper')
  ) {
    console.log('You Win! ' + humanChoice + ' beats ' + computerChoice);
    humanScore++;
  } else if (
    (humanChoice == 'Rock' && computerChoice == 'Paper') ||
    (humanChoice == 'Paper' && computerChoice == 'Scissors') ||
    (humanChoice == 'Scissors' && computerChoice == 'Rock')
  ) {
    console.log('You Lose! ' + humanChoice + ' loses to ' + computerChoice);
    computerScore++;
  }
  console.log('Score: Human: ' + humanScore + ' // Computer: ' + computerScore);
}

playRound(getHumanChoice(), getComputerChoice());
