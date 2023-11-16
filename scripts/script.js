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
		this.updateDisplay(true);
	}

	updateDisplay(resetCurrentOperand) {
		this.previousOperandText.innerText =
			this.previousOperand + " " + this.currentOperator;
		this.currentOperandText.innerText = this.currentOperand;

		if (resetCurrentOperand) {
			this.currentOperandText.innerText = "0";
		}
	}

	appendNumber(number) {
		if (number == "." && this.currentOperand.includes(".")) return;

		this.currentOperand = this.currentOperand + number;
		this.updateDisplay();
	}

	togglePositiveNegative() {
		console.log("toggled");
		if (this.currentOperand.charAt(0) == "-") {
			this.currentOperand = this.currentOperand.slice(1);
		} else {
			this.currentOperand = "-" + this.currentOperand;
		}
		this.updateDisplay();
	}

	displayError() {
		this.clear();
		this.currentOperandText.innerText = "ERR";
	}

	chooseOperation(operator) {
		if (this.currentOperand == "") return;

		if (this.previousOperand != "") {
			this.compute();
		}

		this.currentOperator = operator;
		this.previousOperand = this.currentOperand;
		this.currentOperand = "";
		this.updateDisplay(true);
	}

	compute(fromEqualsButton) {
		if (this.currentOperand == 0 && this.currentOperator == "÷") {
			this.displayError();
			return;
		}

		let result = "";
		switch (this.currentOperator) {
			case "+":
				result = Number(this.previousOperand) + Number(this.currentOperand);
				break;

			case "-":
				result = Number(this.previousOperand) - Number(this.currentOperand);
				break;

			case "×":
				result = Number(this.previousOperand) * Number(this.currentOperand);
				break;

			case "÷":
				result = Number(this.previousOperand) / Number(this.currentOperand);
				break;

			default:
				break;
		}

		console.log(this.previousOperand);

		this.previousOperand = result;

		if (fromEqualsButton) {
			this.updateDisplay();
			this.currentOperandText.innerText = result;
		}
	}
}

const operatorButtons = document.querySelectorAll("[data-operator]");
const numberButtons = document.querySelectorAll("[data-number]");
const clearButton = document.querySelector("[data-clear]");
const negativeButton = document.querySelector("[data-negative]");
const equalsButton = document.querySelector("[data-equals]");
const previousOperandText = document.querySelector("[data-previous-operand");
const currentOperandText = document.querySelector("[data-current-operand");

const calculator = new Calculator(previousOperandText, currentOperandText);

numberButtons.forEach((button) => {
	button.addEventListener("click", () => {
		calculator.appendNumber(button.innerText);
	});
});

operatorButtons.forEach((button) => {
	button.addEventListener("click", () => {
		calculator.chooseOperation(button.innerText);
	});
});

clearButton.addEventListener("click", () => {
	calculator.clear();
});

equalsButton.addEventListener("click", () => {
	calculator.compute(true);
});

negativeButton.addEventListener("click", () => {
	calculator.togglePositiveNegative();
});
