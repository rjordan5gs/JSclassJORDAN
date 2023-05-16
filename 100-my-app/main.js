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
    	decision: mood === 'Happy' && goodDay === 'Yes' ? "You will work on a project!" : "You will lay in bed!"
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

const form = document.getElementById('form');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const mood = document.getElementById('mood').value;
    const timeOfDay = document.getElementById('time-of-day').value;
    const goodDay = document.getElementById('good-day').value;

    const errors = [];

    if (mood === '') {
        errors.push('Please select a mood.');
    }

    if (timeOfDay === '') {
        errors.push('Please select a time of day.');
    }

    if (goodDay === '') {
        errors.push('Please select whether you feel like working.');
    }

    if (errors.length > 0) {
        const errorMessage = errors.join(' ');
        document.getElementById('message').textContent = errorMessage;
    } else {
        document.getElementById('message').textContent = '';

        handleFormSubmission(mood, timeOfDay, goodDay);

        form.reset();
    }
});

function handleFormSubmission(mood, timeOfDay, goodDay) {
    console.log('Mood:', mood);
    console.log('Time of Day:', timeOfDay);
    console.log('Good Day:', goodDay);
}






