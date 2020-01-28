/*-----------------------------------------------------------
	Script to implement the Javascript Drumkit
-----------------------------------------------------------*/
window.addEventListener('keydown',function(e){
	
	// Check if an audio element with the pressed keyCode exists in HTML.
	// Use the 'querySelector' Javascript function
	const audioItem = document.querySelector(`audio[data-key="${e.keyCode}"]`);
	
	// If the audio item corresponding to the keycode of the key that was pressed does not exist
	// return and stop the script.
	if (!audioItem){
		return;
	}
	
	// If the audio item exists, play the sound.
	audioItem.currentTime = 0; // if the audio is already playing, rewind to the start and play again.
	audioItem.play();
});