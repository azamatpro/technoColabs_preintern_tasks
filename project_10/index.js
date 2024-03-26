// Function to get the user's choice
const getUserChoice = (userInput) => {
  // Convert user input to lowercase
  userInput = userInput.toLowerCase();

  // Check if user input is valid
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
    return userInput;
  } else {
    console.log('Error: Please enter a valid choice (rock, paper, or scissors).');
  }
};

// Function to get the computer's choice
const getComputerChoice = () => {
  // Generate a random number between 0 and 2
  const randomNumber = Math.floor(Math.random() * 3);

  // Return computer's choice based on random number
  switch (randomNumber) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  }
};

// Function to determine the winner
const determineWinner = (userChoice, computerChoice) => {
  // Check for a tie
  if (userChoice === computerChoice) {
    return 'The game is a tie!';
  }

  // Check for special cheat code
  if (userChoice === 'bomb') {
    return 'You win! The bomb code is activated!';
  }

  // Check for all other cases
  if (userChoice === 'rock') {
    return computerChoice === 'paper' ? 'Computer wins!' : 'You win!';
  } else if (userChoice === 'paper') {
    return computerChoice === 'scissors' ? 'Computer wins!' : 'You win!';
  } else if (userChoice === 'scissors') {
    return computerChoice === 'rock' ? 'Computer wins!' : 'You win!';
  }
};

// Function to play the game
const playGame = (word) => {
  // Get user's choice
  const userChoice = getUserChoice(word); // Pass 'rock', 'paper', or 'scissors' as an argument

  // Get computer's choice
  const computerChoice = getComputerChoice();

  // Print choices to the console
  console.log(`User choice: ${userChoice}`);
  console.log(`Computer choice: ${computerChoice}`);

  // Determine the winner and print result to the console
  console.log(determineWinner(userChoice, computerChoice));
};

// Start the game
playGame('rock');
playGame('paper');
