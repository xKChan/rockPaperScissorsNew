function getComputerChoice() {
  let number = Math.random();
  if (number < 0.33) {
    console.log('rock');
    console.log(number);
    return 'Rock';
  } else if (number > 0.66) {
    console.log('Paper');
    console.log(number);
    return 'Paper';
  } else if (number > 0.33 && number < 0.66) {
    console.log('Scissors');
    console.log(number);
    return 'Scissors';
  }
}

getComputerChoice();
