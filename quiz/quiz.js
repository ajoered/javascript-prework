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
	var answer = prompt("Do you want chocolate?");
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
	var food = prompt("What do you prefer?: Chocolate, Pizza or Sushi?");
	food = food.toLowerCase();
	switch (food) {
		case "chocolate":
        	food = "Chocolate"
        break;
    	case "pizza":
        	food = "Pizza"
        break;
    	case "Sushi":
        	food = "Sushi"
        break;
        default:
        	"Please stick to the answers provded!"
        return questionMultiple();
	}
	responses.push(questionMultiple);
	}

questionMultiple();
