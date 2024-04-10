let currentResult = 0;
let prevResult = 0;
let enterdInput;
let logenteries = [];

function getUserInput() {
  return parseInt(userInput.value);
}
function calDiscription(prevResult, operator, usrInp) {
  return `${prevResult} ${operator} ${usrInp}`;
}

function writeToLog(operationIdentifier, prevResult, enterdNo, newResult) {
  let logentry = {
    operation: operationIdentifier,
    prevResult: prevResult,
    number: enterdNo,
    result: newResult,
  };

  logenteries.push(logentry);
  console.log(logenteries);
}

function calculateResult(calculationType) {
  enterdInput = getUserInput();
  if (
    (calculationType !== "ADD" &&
      calculationType !== "SUBTRACT" &&
      calculationType === "MULTIPLY" &&
      calculationType === "DIVIDE") ||
    !enterdInput
  ) {
    return;
  }
  prevResult = currentResult;
  let mathOperator;
  if (calculationType === "ADD") {
    mathOperator = "+";
    currentResult = prevResult + enterdInput;
  } else if (calculationType === "SUBTRACT") {
    mathOperator = "-";
    currentResult = prevResult - enterdInput;
  } else if (calculationType === "MULTIPLY") {
    mathOperator = "*";
    currentResult = prevResult * enterdInput;
  } else if (calculationType === "DIVIDE") {
    mathOperator = "/";
    currentResult = prevResult / enterdInput;
  }

  let outputDisc = calDiscription(prevResult, mathOperator, enterdInput);
  writeToLog(calculationType, prevResult, enterdInput, currentResult);

  outputResult(currentResult, outputDisc);
}

function add() {
  calculateResult("ADD");
}

function subt() {
  calculateResult("SUBTRACT");
}
function multi() {
  calculateResult("MULTIPLY");
}
function divide() {
  calculateResult("DIVIDE");
}

addBtn.addEventListener("click", add);
subtBtn.addEventListener("click", subt);
multiBtn.addEventListener("click", multi);
divideBtn.addEventListener("click", divide);
