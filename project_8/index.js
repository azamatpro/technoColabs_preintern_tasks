// Define a variable called userName that is set to an empty string.
let userName = '';

// Ternary expression to decide what to do if the user enters a name or not
userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!');

// Create a variable named userQuestion containing the question the user wants to ask the Magic Eight Ball.
const userQuestion = 'Will I win the lottery?';

// Log the user's question to the console
console.log(`The user asked: ${userQuestion}`);

// Generate a random number between 0 and 7
const randomNumber = Math.floor(Math.random() * 8);

// A variable named eightBall and set it equal to an empty string
let eightBall = '';

// A control flow to assign eightBall to a Magic Eight Ball reply based on the randomNumber
switch (randomNumber) {
  case 0:
    eightBall = 'It is certain';
    break;
  case 1:
    eightBall = 'It is decidedly so';
    break;
  case 2:
    eightBall = 'Reply hazy try again';
    break;
  case 3:
    eightBall = 'Cannot predict now';
    break;
  case 4:
    eightBall = 'Do not count on it';
    break;
  case 5:
    eightBall = 'My sources say no';
    break;
  case 6:
    eightBall = 'Outlook not so good';
    break;
  case 7:
    eightBall = 'Signs point to yes';
    break;
}

// Print the Magic Eight Ball's answer to the console
console.log(`The Magic Eight Ball's answer: ${eightBall}`);
