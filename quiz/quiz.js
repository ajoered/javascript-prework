//Iteration 1
var user = {};
var responses = [];


function questionName() {
  var name = prompt("What is your name?");
  user.name = name;
}

questionName();

//Iteration 2
var responses = []

function questionStupid() {
	var answer = prompt("Is JJF the best surfer in the world?");
	if (answer.toLowerCase() === "yes") {
		answer = true
	} else if (answer.toLowerCase() === "no") {
		answer = false
	} else {
		alert("Please answer 'yes' or 'no'!")
		return questionStupid()
	}
	responses.push(questionStupid);
}

questionStupid();

//Iteration 3
function questionMultiple() {
	var worldtitles = prompt("How many titles has Kelly Slater won?: three, six or twelve?");
	switch (worldtitles) {
		case "three":
        	worldtitles = false
        break;
    	case "six":
        	worldtitles = false
        break;
    	case "twelve":
        	worldtitles = true
        break;
        default:
        	"Please stick to the answers provided!"
        return questionMultiple();
	}
	responses.push(questionMultiple);
	}

questionMultiple();

//Iteration 4
function questionMath() {
	var answer = prompt("What is the square root of 144?");
	if (answer === 12) {
		answer = true;
	} else if (answer !== 12) {
		answer = false;
	} else if (isNaN(answer)){
		alert("Please enter an integer");
		return questionStupid();
	}
	responses.push(questionStupid);
}

questionMath();


function evaluate (responsesArray) {
	totalTrue = 0
	totalFalse = 0

	for (var i = 0; i < responsesArray.length; i++) {
		if (responsesArray[i] = true){
			totalTrue += 1;
	} else {
			totalFalse += 1;
	}
	}

	user.correct = totalTrue;
	user.failed = totalFalse;

	showResults();
}

function showResults() {
	alert('Hola ' + user.name + '!.. You have ' + user.correct + ' correct answers and ' + user.failed + ' incorrect answers.' );
}

evaluate(responses);







