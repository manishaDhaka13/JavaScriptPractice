const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSOR = "SCISSOR";
const PLAYER_WIN = "PLAYER_WIN";
const COMPUTER_WIN = "COMPUTER_WIN";
const DRAW = "DRAW";
const DEFAULT_CHOICE = "ROCK";

let gameIsRunning = false;

const getUserInput = () => {
  const userInput = prompt(`${ROCK} or ${PAPER} or ${SCISSOR}`).toUpperCase();
  if (userInput !== ROCK && userInput !== PAPER && userInput !== SCISSOR) {
    return;
  }

  return userInput;
};

const getComputerChoice = () => {
  const randomValue = Math.random();
  if (randomValue < 0.3) {
    return ROCK;
  } else if (randomValue >= 0.3 && randomValue < 0.66) {
    return PAPER;
  } else {
    return SCISSOR;
  }
};

const getWinner = (cChoice, pChoice = DEFAULT_CHOICE) => {
  console.log(pChoice, cChoice);
  if (
    (pChoice === ROCK && cChoice === SCISSOR) ||
    (pChoice === SCISSOR && cChoice === PAPER) ||
    (pChoice === PAPER && cChoice === ROCK)
  ) {
    return PLAYER_WIN;
  } else if (
    (pChoice === ROCK && cChoice === ROCK) ||
    (pChoice === SCISSOR && cChoice === SCISSOR) ||
    (pChoice === PAPER && cChoice === PAPER)
  ) {
    return DRAW;
  } else {
    return COMPUTER_WIN;
  }
};

// const startGameHandler = () => {
//   const playerChoice = getUserInput();
//   console.log(playerChoice);
//   const computerChoice = getComputerChoice();
//   console.log(computerChoice);
//   const winner = getWinner(playerChoice, computerChoice);
//   console.log(winner);
//   alert(`${winner}`);
// };

startBtn.addEventListener("click", () => {
  if (gameIsRunning) {
    return;
  }

  gameIsRunning = true;
  const playerChoice = getUserInput();

  const computerChoice = getComputerChoice();
  let winner;
  if (playerChoice) {
    winner = getWinner(computerChoice, playerChoice);
  } else {
    alert(`you print invalid value we choose ${DEFAULT_CHOICE} for you `);
    winner = getWinner(computerChoice);
  }

  let message = `you picked ${
    playerChoice || DEFAULT_CHOICE
  } and computer choice is ${computerChoice} 
                so the winner is ${winner}`;

  console.log(winner);
  alert(message);
});

const ADD = "ADD";
const SUBTRACT = "SUBTRACT";

const combine = (resultText, operation, ...number) => {
  let sum = 0;
  const validateNumber = (number) => {
    return isNaN(number) ? 0 : number;
  };
  if (operation === ADD) {
    for (num of number) {
      sum += validateNumber(num);
    }
  } else if (operation === SUBTRACT) {
    for (num of number) {
      sum = sum - validateNumber(num);
    }
  }
  resultText(sum);
  console.log(sum);
};

const showResult = (Text, result) => {
  let message = `${Text} = ${result}`;
  alert(message);
};

addBtn.addEventListener("click", () => {
  let userInput1 = parseInt(prompt("enter a number"));
  let userInput2 = parseInt(prompt("enter a number"));
  let result = combine(
    showResult.bind(this, `you add ${userInput1} and ${userInput2 || 0}`),
    ADD,
    userInput1,
    userInput2
  );
});

subtBtn.addEventListener("click", () => {
  let userInput1 = parseInt(prompt("enter a number"));
  let userInput2 = parseInt(prompt("enter a number"));
  let result = combine(
    showResult.bind(this, `you subtract ${userInput1} and ${userInput2 || 0}`),
    SUBTRACT,
    userInput1,
    userInput2
  );
});
