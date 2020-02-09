/*-----------------------------------------------------------
	Script to implement the Javascript Calculator
-----------------------------------------------------------*/
window.addEventListener('keydown',function(e){
	const keyPressed = document.querySelector(`kbd[data-key="${e.keyCode}"]`);
	
	console.log(keyPressed.innerHTML);
	
	document.getElementById("answerDisplay").innerHTML = keyPressed.innerHTML;
});