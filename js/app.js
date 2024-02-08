// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Create a new speechSynthesis object
var synth = window.speechSynthesis;
// Learn more about SpeechSynthesis.speak() at https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/speak

/* Functions
-------------------------------------------------- */
function speakNow(string) {
	// Create a new speech object, attaching the string of text to speak
	var utterThis = new SpeechSynthesisUtterance(string);
	// Actually speak the text
	synth.speak(utterThis);
}


var nouns = ['The turkey', 'Mom', 'Dad', 'The dog', 'My teacher', 'The elephant', 'The cat'];
var verbs = ['sat on', 'ate', 'danced with', 'saw', 'doesnt like', 'kissed'];
var adjectives = ['a funny', 'a scary',' a goofy', 'a slimy', 'a barking', 'a fat'];
var anotherNouns = ['goat', 'monkey', 'fish', 'cow', 'frog', 'bug', 'worm'];
var places = ['on the moon', 'on the chair', 'in my spaghetti', 'in my soup', 'on the grass', 'in my shoes'];

var speakButton = document.getElementById('speakButton');

var buttons = {
	'nounButton': nouns,
	'verbButton': verbs,
	'adjButton': adjectives,
	'anotherNounButton': anotherNouns,
	'placeButton': places
};

var myRandomPhrase = '';


function getRandomWord(array) {
	return array[Math.floor(Math.random() * array.length)];
}

for (var buttonId in buttons) {
	if (buttons.hasOwnProperty(buttonId)) {
		document.getElementById(buttonId).addEventListener('click', function (id) {
			return function () {
				var randomWord = getRandomWord(buttons[id]);
				myRandomPhrase += randomWord + ' ';
			};
		}(buttonId));
	}
}

// Event listener for the speak button
speakButton.onclick = function() {
	speakNow(myRandomPhrase);
	myRandomPhrase = '';
}