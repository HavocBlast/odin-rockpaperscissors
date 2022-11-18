let playerWins = 0;
let computerWins = 0;
function getComputerChoice() {
  let computerChoiceNum = Math.floor(Math.random() * 3);
  //selects rock, paper, or scissor based on the random computerChoiceNum value
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
  if (playerChoice === 'rock' && computerChoice === 'paper') {
    computerWins++;
    return 'You lose! Paper covers Rock';
  }
  if (playerChoice === 'paper' && computerChoice === 'scissor') {
    computerWins++;
    return 'You lose! Scissor cuts Paper';
  }
  if (playerChoice === 'scissor' && computerChoice === 'rock') {
    computerWins++;
    return 'You lose! Rock crushes Scissors';
  }
  if (playerChoice === 'rock' && computerChoice === 'scissor') {
    playerWins++;
    return 'You win! Rock crushes Scissors';
  }
  if (playerChoice === 'paper' && computerChoice === 'rock') {
    playerWins++;
    return 'You win! Paper covers Rock';
  }
  if (playerChoice === 'scissor' && computerChoice === 'paper') {
    playerWins++;
    return 'You win! Scissor cuts Paper';
  }
  if (playerChoice === 'rock' && computerChoice === 'rock') {
    return 'You Draw!';
  }
  if (playerChoice === 'paper' && computerChoice === 'paper') {
    return 'You Draw!';
  }
  if (playerChoice === 'scissor' && computerChoice === 'scissor') {
    return 'You Draw!';
  } else {
    console.error('Please enter a valid choice "Rock", "Paper", or "Scissors"');
  }
}

function game(playerChoice) {
  if (playerWins === 5 || computerWins === 5) {
    //game is over and show the winner
    const html = document.getElementById('results');
    html.innerHTML = `The ${playerWins === 5 ? 'player' : 'computer'} wins!`;
  } else {
    let computerChoice = getComputerChoice();
    const htmlScore = document.getElementById('score');
    const html = document.getElementById('results');
    html.innerHTML = playRound(playerChoice, computerChoice);
    htmlScore.innerHTML = `Player: ${playerWins} Computer: ${computerWins}`;
  }
}
