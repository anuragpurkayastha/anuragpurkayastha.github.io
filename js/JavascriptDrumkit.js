/*-----------------------------------------------------------
	Script to implement the Javascript Drumkit
-----------------------------------------------------------*/
// Function to play a sound when a key is pressed
function playSound(e){
	
	// Check if an audio element with the pressed keyCode exists in HTML.
	// Use the 'querySelector' Javascript function
	const audioItem = document.querySelector(`audio[data-key="${e.keyCode}"]`);
	
	// Select the div component of the key that is pressed
	const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
	
	// If the audio item corresponding to the keycode of the key that was pressed does not exist
	// return and stop the script.
	if (!audioItem){
		return;
	}
	
	// If the audio item exists, play the sound.
	audioItem.currentTime = 0; // if the audio is already playing, rewind to the start and play again.
	audioItem.play();
	
	// When a key is pressed, apply the CSS animation transition to the corresponding div element.
	key.classList.add("playing");
}

// Function to remove the transition from a key press so that the div element goes back to its original state
function removeTransition(e) {
	if (e.propertyName!== 'transform') return;	// If the property name of the event 'e' is not transform, then return.
	this.classList.remove("playing");
}

// Add an event listener to listen for keys that are pressed.
window.addEventListener('keydown',playSound);

const keys = document.querySelectorAll(".key");	// Select all elements with class ".key"
keys.forEach(key => key.addEventListener("transitionend", removeTransition));	// Add an event listener to listen for a CSS transition that has ended.