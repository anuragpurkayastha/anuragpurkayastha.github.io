/*
	Script for 'Guess The Colour' Game

	Reference:	https://projects.raspberrypi.org/en/projects/cd-beginner-javascript-sushi
*/

// Variables
var buttons = document.getElementsByClassName("colourButton"); //Array of all the colour buttons
var rgbDisplay = document.getElementById("colourValue");	// Heading to display the colours

/*------------------------------------------------------
	Function: setButtonColour(button, rgbVals)

	Description:
		This function sets the button colour of the
		object 'button' to an RGB colour with specified
		values rgb values in the array rgbVals
--------------------------------------------------------*/
function setButtonColour(button, rgbVals){
	//Set the background colour to rgb(_red_ , _green_ , _blue_ )
	button.style.backgroundColor = "rgb(" + rgbVals[0] + "," + rgbVals[1] + "," + rgbVals[2] + ")";
}

/*------------------------------------------------------
	Function: makeRandomColour()

	Description:
		Return a random RGB colour value. This will generate
		three random values from 0 to 255 for each of the red,
		green and blue values.

	Returns:
		Array with the [red, green, blue] values.
--------------------------------------------------------*/
function makeRandomColour() {
	red = Math.round(Math.random() * 255);
	green = Math.round(Math.random() * 255);
	blue = Math.round(Math.random() * 255);

	return [red, green, blue];
}

/*------------------------------------------------------
	Function: startGame()

	Description:
		Starts an instance of the game.
--------------------------------------------------------*/
function startGame(){

	answerMessage.innerHTML = "";	//	Clear the answer message
	var answerButtonIndex = Math.round(Math.random() * (buttons.length - 1));	//Index of the randomly selected "correct" answer button.

	console.log("Answer button index:" + answerButtonIndex);
	//Randomly change all of the button colours
	for (let i = 0; i < buttons.length ; i++) {
		let randomRGBColour = makeRandomColour();	//Get a random RGB colour
		setButtonColour(buttons[i] , randomRGBColour);	//Set the button colour to the random colour.

		// If i is equal to the index of the randomly selected "answer button", display the
		// rgb colour value of the answer button.
		if (i === answerButtonIndex){
			rgbDisplay.innerHTML = `(${randomRGBColour[0]} , ${randomRGBColour[1]} , ${randomRGBColour[2]})`;
		}

		//Listen for clicks on each button
		buttons[i].addEventListener('click', function() {
			if (this === buttons[answerButtonIndex]){
				answerMessage.innerHTML = "Correct answer!";
				document.getElementsByTagName("body")[0].style.backgroundColor = "rgb(" + randomRGBColour[0] + "," + randomRGBColour[1] + "," + randomRGBColour[2] + ")";
			}else{
				answerMessage.innerHTML = "Wrong answer! Try again.";
			}
		});
	}
}
startGame();	//	Start the game
document.getElementById("resetButton").addEventListener('click',startGame);	//	If the reset button is pressed, reset the game.
