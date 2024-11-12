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

// function getHumanChoice() {
//   let playerPick = prompt('Rock, Paper, or Scissors? ');
//   let playerPickConverted =
//     playerPick.charAt(0).toUpperCase() + playerPick.slice(1).toLowerCase();
//   return playerPickConverted;
// }

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

function clickedRock() {
  let computerSelection = getComputerChoice();
  playRound('Rock', computerSelection);
  console.log('I Picked Rock');
}

function clickedPaper() {
  let computerSelection = getComputerChoice();
  playRound('Paper', computerSelection);
  console.log('I Picked Paper');
}

function clickedScissors() {
  let computerSelection = getComputerChoice();
  playRound('Scissors', computerSelection);
  console.log('I Picked Scissors');
}

const pickedRock = document.getElementById('rock');
const pickedPaper = document.getElementById('paper');
const pickedScissors = document.getElementById('scissors');

pickedRock.addEventListener('click', clickedRock);
pickedPaper.addEventListener('click', clickedPaper);
pickedScissors.addEventListener('click', clickedScissors);

// function playGame() {
//   for (let i = 0; i < 5; i++) {
//     let humanSelection = getHumanChoice();
//     let computerSelection = getComputerChoice();
//     playRound(humanSelection, computerSelection);
//   }
//   if (humanScore > computerScore) {
//     console.log(
//       'Congrats! You Win !! // Player Score: ' +
//         humanScore +
//         ' Computer Score: ' +
//         computerScore
//     );
//   } else if (humanScore < computerScore) {
//     console.log(
//       'Boo! You Lose !! // Player Score: ' +
//         humanScore +
//         ' Computer Score: ' +
//         computerScore
//     );
//   } else {
//     console.log(
//       'Tie Game! No one wins // Player Score: ' +
//         humanScore +
//         ' Computer Score: ' +
//         computerScore
//     );
//   }
//   return;
// }

// playGame();
// playRound(humanSelection, computerSelection);
