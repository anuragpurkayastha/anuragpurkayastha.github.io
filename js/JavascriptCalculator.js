/*-----------------------------------------------------------
	Script to implement the Javascript Calculator
-----------------------------------------------------------*/

/*----------------------------------------------------
	ADD AN EVENT LISTENER FOR EACH OF THE KEYS
-----------------------------------------------------*/

// First select all the keys and store in a variable.
const calculatorKeys = document.querySelectorAll(".calculatorKey");
const display = document.getElementById("answerDisplay");

//DEBUG - display all the selected keys
console.log(calculatorKeys);

//Add an event listener to each of the keys
calculatorKeys.forEach(key => key.addEventListener("click",function(e){
	console.log(e.target.dataset.key); // Print the "data-key" attribute of the clicked key.
}));
