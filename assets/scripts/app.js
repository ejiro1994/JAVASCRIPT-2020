const defaultResult = 0
let currentResult = defaultResult

let calculationDescription
let logEntries = []


function getUserNumberInput() {
	return +userInput.value
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
	const calculationDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`
	outputResult(currentResult, calculationDescription)

}

function writeToLog(
	operationIdentifier,
	previousResult,
	operationNumber,
	newResult
) {
	const logEntry = {
		operation: operationIdentifier,
		previousResult: previousResult,
		number: operationNumber,
		result: newResult
	}

	logEntries.push(logEntry)
	console.log(logEntries);
}

function calculateResult(calculationType) {


	

	const enteredNumber = getUserNumberInput()
	const initialResult = currentResult
	let mathOperator

	if (calculationType === 'ADD') {
		currentResult += enteredNumber
		const calculationDescription = `${currentResult} + ${enteredNumber}`
		mathOperator = '+'
	} else if (calculationType === 'SUBTRACT') {
		currentResult -= enteredNumber
		const calculationDescription = `${currentResult} - ${enteredNumber}`
		mathOperator = '-'
	}
	 else if (calculationType === 'DIVIDE') {
		currentResult /= enteredNumber
		const calculationDescription = `${currentResult} / ${enteredNumber}`
		mathOperator = '/'
	}


	createAndWriteOutput(mathOperator, initialResult, enteredNumber)
	writeToLog(calculationType, initialResult, enteredNumber, currentResult)
}


function add() {
	calculateResult('ADD')
}
function subtract() {
	calculateResult('SUBTRACT')
}
function divide() {
	calculateResult('DIVIDE')
}



addBtn.addEventListener('click', add)
subtractBtn.addEventListener('click', subtract)
divideBtn.addEventListener('click', divide)
