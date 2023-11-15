class Calculator {
	constructor(previousOperandText, currentOperandText) {
		this.previousOperandText = previousOperandText;
		this.currentOperandText = currentOperandText;
		this.clear();
	}

	clear() {
		this.previousOperand = "";
		this.currentOperand = "";
		this.currentOperator = "";
		this.updateDisplay();
		this.currentOperandText.innerText = "0";
	}

	updateDisplay() {}

	appendNumber(number) {}

	chooseOperation(operator) {}

	displayError() {}

	compute() {}
}

const operatorButtons = document.querySelectorAll("[data-operator]");
const numberButtons = document.querySelectorAll("[data-number]");
const clearButton = document.querySelector("data-clear");
const negativeButton = document.querySelector("data-negative");
const equalsButton = document.querySelector("data-equals");
const previousOperandText = document.querySelector("[data-previous-operand");
const currentOperandText = document.querySelector("[data-current-operand");

const calculator = new Calculator(previousOperandText, currentOperandText);
