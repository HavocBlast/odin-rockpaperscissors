let playerWins = 0;
let computerWins = 0;

function getComputerChoice() {
  let computerChoiceNum = Math.floor(Math.random() * 3);

  switch (computerChoiceNum) {
    case 0:
      return 'rock';
      break;
    case 1:
      return 'paper';
      break;
    case 2:
      return 'scissor';
      break;

    default:
      console.error('The computer failed to make a valid choice');
      break;
  }
}

function playRound(playerChoice, computerChoice) {
  if (playerChoice.toLowerCase() === 'rock' && computerChoice === 'paper') {
    computerWins++;
    return 'You lose! Paper covers Rock';
  }
  if (playerChoice.toLowerCase() === 'paper' && computerChoice === 'scissor') {
    computerWins++;
    return 'You lose! Scissor cuts Paper';
  }
  if (
    playerChoice.toLowerCase() === 'scissor' ||
    (playerChoice.toLowerCase() === 'scissors' && computerChoice === 'rock')
  ) {
    computerWins++;
    return 'You lose! Rock crushes Scissors';
  }
  if (playerChoice.toLowerCase() === 'rock' && computerChoice === 'scissor') {
    playerWins++;
    return 'You win! Rock crushes Scissors';
  }
  if (playerChoice.toLowerCase() === 'paper' && computerChoice === 'rock') {
    playerWins++;
    return 'You win! Paper covers Rock';
  }
  if (
    playerChoice.toLowerCase() === 'scissor' ||
    (playerChoice.toLowerCase() === 'scissors' && computerChoice === 'paper')
  ) {
    playerWins++;
    return 'You win! Scissor cuts Paper';
  }
  if (playerChoice.toLowerCase() === 'rock' && computerChoice === 'rock') {
    return 'You Draw!';
  }
  if (playerChoice.toLowerCase() === 'paper' && computerChoice === 'paper') {
    return 'You Draw!';
  }
  if (
    playerChoice.toLowerCase() === 'scissor' ||
    (playerChoice.toLowerCase() === 'scissors' && computerChoice === 'scissor')
  ) {
    return 'You Draw!';
  } else {
    console.error('Please enter a valid choice "Rock", "Paper", or "Scissors"');
  }
}

function game() {
  for (let game = 0; game < 5; game++) {
    let playerChoice = prompt('Pick "Rock", "Paper" or "Scissors"');
    let computerChoice = getComputerChoice();
    let result = playRound(playerChoice, computerChoice);
    console.log(result);
    
  }
  console.log(`Game ended!  Player: ${playerWins} Computer: ${computerWins}`)
}
