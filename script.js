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
  if (humanChoice == computerChoice) {
    console.log('Tie! No one wins.');
  } else if (
    (humanChoice == 'Rock' && computerChoice == 'Scissors') ||
    (humanChoice == 'Paper' && computerChoice == 'Rock') ||
    (humanChoice == 'Scissors' && computerChoice == 'Paper')
  ) {
    console.log('You Win!');
    humanScore++;
  } else if (
    (humanChoice == 'Rock' && computerChoice == 'Paper') ||
    (humanChoice == 'Paper' && computerChoice == 'Scissors') ||
    (humanChoice == 'Scissors' && computerChoice == 'Rock')
  ) {
    console.log('You Lose!');
    computerScore++;
  }
  console.log('Score: Human: ' + humanScore + ' // Computer: ' + computerScore);
  console.log('Human: ' + humanChoice, 'Computer:' + computerChoice);
}

playRound(getHumanChoice(), getComputerChoice());
