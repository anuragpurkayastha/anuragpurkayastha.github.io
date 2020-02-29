 /*-----------------------------------------------------------
	Script to implement the Javascript Calculator
-----------------------------------------------------------*/
// Variables
const calculatorKeys = document.querySelectorAll(".calculatorKey");		//All the keys and store in a variable.
const display = document.getElementById("answerDisplay");				//Display of the calculator
let currentNumberDigits = [];											//Array which stores the digits of the current number being pressed into the calculator.
let currentNumber;														//Number representation of the number being typed in.
let result = 0;															//Variable to store the result of the calculation.
let decimalPressed = false;												//Boolean value to check if the decimal button has been pressed. Ensures decimal pressed only once.
let numberToDisplay;													//Number to display on the calculator
let operation;															// Operation to perform (add, minus, divide or multiply)

/*----------------------------------------------------
	FUNCTIONS
-----------------------------------------------------*/
function calculator(e)	{

	// Grab the data-key attribute of the pressed key.
	keyPressed = e.target.dataset.key;

	// Assuming a number is inputted in first, store the digits in the array "currentNumberDigits"
	switch(keyPressed){
		case "0":
			currentNumberDigits.push(0);
			break;
		case "1":
			currentNumberDigits.push(1);
			break;
		case "2":
			currentNumberDigits.push(2);
			break;
		case "3":
			currentNumberDigits.push(3);
			break;
		case "4":
			currentNumberDigits.push(4);
			break;
		case "5":
			currentNumberDigits.push(5);
			break;
		case "6":
			currentNumberDigits.push(6);
			break;
		case "7":
			currentNumberDigits.push(7);
			break;
		case "8":
			currentNumberDigits.push(8);
			break;
		case "9":
			currentNumberDigits.push(9);
			break;
		case ".":
			if(decimalPressed){
				break;
			}
			currentNumberDigits.push(".");
			decimalPressed = true;	//The decimal button has been pressed once.
			break;
		case "plus":	//MUST FIX BELOW!!! MANY BUGS.
			operation = "addition";
			break;
		case "minus":
			operation = "subtraction";
			break;
		case "divide":
			operation = "division";
			break;
		case "multiply":
			operation = "multiplication";
			result = 1;
			break;
		case "equals":
			operation = "equals";
			display.innerHTML += "=";
			break;
		default:
			break;
	}

	//Convert the typed number to a float.
	currentNumber = parseFloat(currentNumberDigits.join(""));
	display.innerHTML = currentNumberDigits.join("");

	switch(operation){
		case "multiplication":
			result = result * currentNumber;
			break;
		case "addition":
			result += currentNumber;
			break;
		case "subtraction":
			result -= currentNumber;
			break;
		case "equals":
			display.innerHTML = result;
			break;
		default:
			break;
	}
	
	if(operation != null){
		currentNumberDigits = [];
	}

	console.log("Current digits typed in: " + currentNumberDigits);
	console.log("Number to display on calculator: " + currentNumber);
	console.log(result);
	console.log("Operation: "+operation);

}


/*----------------------------------------------------
	MAIN
-----------------------------------------------------*/

//DEBUG - display all the selected keys
console.log(calculatorKeys);

//Add an event listener to each of the keys and run the "calculator" function.
currentNumberDigits = [];
calculatorKeys.forEach(key => key.addEventListener("click",calculator));
