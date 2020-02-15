/*-----------------------------------------------------------
	Script to implement the Javascript Calculator
-----------------------------------------------------------*/

/*----------------------------------------------------
	ADD AN EVENT LISTENER FOR EACH OF THE KEYS
-----------------------------------------------------*/

// First select all the keys and store in a variable.
const calculatorKeys = document.querySelectorAll(".calculatorKey");

//DEBUG - display all the selected keys
console.log(calculatorKeys);

//Add an event listener to each of the keys
calculatorKeys.forEach(key => key.addEventListener("click",function(e){
	console.log(e.target.keyValue);
}));
