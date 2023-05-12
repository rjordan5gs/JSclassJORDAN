//global variables
const RECORDS = [];

//functions
function updateDOM(input, id) {
  const outputEl = document.querySelector(id);
  const recordText = `Mood: ${input.mood}, When: ${input.timeOfDay}, Was it a good day: ${input.goodDay}`;
  outputEl.textContent = recordText;
}

function addRecord(event) {
	event.preventDefault();
 
	const mood = document.querySelector('#mood').value;
	const timeOfDay = document.querySelector('#time-of-day').value;
	const goodDay = document.querySelector('#good-day').value;
 
	const record = { mood, timeOfDay, goodDay };
	RECORDS.push(record);
	updateDOM(record, '#output');
    //object
	const userObj = {
    	data: record,
    	decision: mood === 'Happy' && goodDay === 'Yes' ? "Sick! Keep on being productive!" : "It's going to be hard, but keep up the hard work!"
	}
	displayMessage(userObj.decision);
 
	document.querySelector('#mood').value = '';
	document.querySelector('#time-of-day').value = '';
	document.querySelector('#good-day').value = '';
}

function displayMessage(message) {

	const messageEl = document.querySelector('#message');
	messageEl.textContent = message;
}


const form = document.querySelector('form');
form.addEventListener('submit', addRecord);





