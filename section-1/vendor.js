const userInput = document.getElementById("input-number");

const addBtn = document.getElementById("add-btn");
const subtBtn = document.getElementById("subtract-btn");
const multiBtn = document.getElementById("multiply-btn");
const divideBtn = document.getElementById("divide-btn");
const calculatedResult = document.getElementById("result");
const resultText = document.getElementById("result-text");

function outputResult(result, calculationDescription) {
  calculatedResult.textContent = result;
  resultText.textContent = calculationDescription;
}
