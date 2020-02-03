/*--------------------------------------------------
		Script to run the javascript clock
--------------------------------------------------*/
const secondHand = document.querySelector(".second-hand");		// Variable which grabs the "second-hand" object.
const minuteHand = document.querySelector(".min-hand");		// Grab the "minute-hand" object.
const hourHand = document.querySelector(".hour-hand");			// Grab the "hour-hand" element.
	
// Function to get the current date
function setDate()	{
	
	const now = new Date();					// Get the current date
	const seconds = now.getSeconds();		// Get the seconds from the current date.
	const secondsDegrees = (seconds / 60) * 360 + 90;	// Convert the seconds to a degree value. Note: Offset the original 90 degree offset applied to the initial state of the clock (to make all hands point to 12).
	
	//With the degree value of the second hand, rotate the second hand according to the angle corresponding to the current second value.
	secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
	
	// Repeat with minute hand
	const minutes = now.getMinutes();	// Get the current minute.
	const minutesDegrees = (minutes / 60) * 360 + 90;	// Convert minute value to angle on clock.
	minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;	// Set the position of the minute hand according to the current minute.
	
	// Repeat with hour hand
	const hours = now.getHours();	// Get the current hour
	const hoursDegrees = (hours / 12) * 360 + 90;	// Convert hour value to angle on clock.
	hourHand.style.transform = `rotate(${hoursDegrees}deg)`;	// Set the position of the hour hand according to the current hour.
}

// Call the "setDate()" function every second to update the display of the clock every second.
setInterval(setDate, 1000);