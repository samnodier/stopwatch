// Grab the dom element that we need to be updated
const start = document.querySelector('.btn-start');
const pause = document.querySelector('.btn-pause');
const reset = document.querySelector('.btn-reset');
const container = document.querySelector('.container');

// Set the global variables to be used in the function
let startTime = 0;
let hours = 0;
let minutes = 0;
let seconds = 0;
let myInterval;

// The function to display the timestamp
function displayTimestamp() {
	hours = Math.floor(startTime/3600);
	minutes = Math.floor((startTime - (hours*3600))/60);
	seconds = Math.floor((startTime - (hours*3600)) - (minutes*60));
	console.log(startTime);	
	hours = (hours > 9) ? `${hours}` : `0${hours}`;
	minutes = (minutes > 9) ? `${minutes}` : `0${minutes}`;
	seconds = (seconds > 9) ? `${seconds}` : `0${seconds}`;
	document.querySelector('.clock').textContent = `${hours}:${minutes}:${seconds}`;
  start.removeEventListener('click', displayTimestamp);
  startTime++;
}

// Set an eventListener to the start button
start.addEventListener('click', () => {
	container.setAttribute('class', 'container zoom');
  start.style.backgroundColor = 'rgba(0, 0, 0, .5)';
  start.style.cursor = 'not-allowed';
  myInterval = setInterval(displayTimestamp, 1000);
});

// Set an eventListener to the pause button
pause.addEventListener('click', () => {
	container.setAttribute('class', 'container');
	clearInterval(myInterval);
	document.querySelector('.clock').textContent = `${hours}:${minutes}:${seconds}`;
	start.textContent = 'resume';
	start.style.backgroundColor = 'rgba(0, 0, 255, .5)';
	start.style.cursor = 'pointer';
	start.addEventListener('click', displayTimestamp); 
});

// Set an event listener to the reset button
reset.addEventListener('click', () => {
	container.setAttribute('class', 'container');
	startTime = 0;
  hours = Math.floor(startTime/3600);
  minutes = Math.floor((startTime - (hours*3600))/60);
  seconds = Math.floor((startTime - (hours*3600)) - (minutes*60));
	hours = (hours > 9) ? `${hours}` : `0${hours}`;
	minutes = (minutes > 9) ? `${minutes}` : `0${minutes}`;
	seconds = (seconds > 9) ? `${seconds}` : `0${seconds}`;
	document.querySelector('.clock').textContent = `${hours}:${minutes}:${seconds}`;
	clearInterval(myInterval);
	start.textContent = 'start';
	start.style.backgroundColor = 'rgba(0, 0, 255, .5)';
	start.style.cursor = 'pointer';
});

// Call the function first to make sure that the time is displayed before the timer starts to run
displayTimestamp();
