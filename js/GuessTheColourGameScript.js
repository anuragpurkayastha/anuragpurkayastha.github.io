/*
	Script for 'Guess The Colour' Game

	Reference:	https://projects.raspberrypi.org/en/projects/cd-beginner-javascript-sushi
*/
$(function() {
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

		// Initialize the display of the page.
		$( "#answerMessage" ).text("");	//	Clear the answer message
		
		let answerButtonIndex = Math.floor((Math.random() * $( ".colourButton" ).toArray().length));
		
		//	DEBUGGING - console.log("Answer button index:" + answerButtonIndex);
		
		//For each button, change the colour for each button.
		$( ".colourButton" ).each(function() {
			
			let randomRGBColour = makeRandomColour();	//Get a random RGB colour
			
			//	DEBUG
			//console.log("The colours for button "+$( this ).index()+" will be: "+"rgb("+ randomRGBColour[0] +","+ randomRGBColour[1] +","+ randomRGBColour[2] +")");
			
			//setButtonColour(buttons[i] , randomRGBColour);	//Set the button colour to the random colour.
			$( this ).css("background-color", "rgb("+ randomRGBColour[0] +","+ randomRGBColour[1] +","+ randomRGBColour[2] +")");
			
			//	DEBUG
			//console.log("The colour for button "+$( this ).index()+" is: "+ $( this ).css("background-color"));
			
			// If the button index is equal to the index of the randomly selected "answer button", display the
			// rgb colour value of the answer button.
			if ($( this ).index() === answerButtonIndex){
				$( "#colourValue" ).text($( this ).css("background-color"));
			}
		});

		//Listen for clicks on each button
		$( ".colourButton" ).click(function(){
			
			// Get the index of the clicked button
			let buttonIndex = $( this ).index();
			
			//	DEBUG
			//console.log("Button " + buttonIndex + " has been clicked");
			
			if (buttonIndex === answerButtonIndex){
				// Change the answer message appropriately
				$( "#answerMessage").text("Correct answer!");
				
				//Draw a border around the correctly guessed button
				$( this ).css("border" , "5px solid yellow");
				
				// Stop listening for button clicks after the answer button has been clicked.
				$( ".colourButton" ).off("click");
				
				// Change the colour of the body to colour of the correctly clicked answer button.
				$( "body" ).css("background-color",$( this ).css("background-color"));
			}else{
				$( "#answerMessage").text("Wrong answer! Try again.");
			}
		});
	}
		
	startGame();	//	Start the game
	
	$( "#resetButton" ).click(function(){
		location.reload();
	});	//	If the reset button is pressed, reload the page.
});