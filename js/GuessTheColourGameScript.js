/*
	Script for 'Guess The Colour' Game
	
	Reference:	https://projects.raspberrypi.org/en/projects/cd-beginner-javascript-sushi
*/

/*------------------------------------------------------
	Function: setButtonColour(button, red , green , blue)
	
	Description:
		This function sets the button colour of the
		object 'button' to an RGB colour with specified
		values 'red' , 'green', and 'blue.
--------------------------------------------------------*/
function setButtonColour(button, red, green, blue){
	//Set the background colour to rgb(_red_ , _green_ , _blue_ )
	button.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
}

var buttons = document.getElementsByClassName('colourButton');

setButtonColour(buttons[0],0,0,255);