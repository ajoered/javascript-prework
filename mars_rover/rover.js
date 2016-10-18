var myRover = {
  position: [0,0], 
  direction: 'N'
};

function reset(rover) {
  rover.position[0] = 0;
  rover.position[1] = 0;
  rover.direction = 'N';
 console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]");
 console.log("The Rover is now facing: " + rover.direction);
}

function turnLeft(rover) {
  switch(rover.direction) {
    case 'N':
      rover.direction = 'W'
      break;
    case 'E':
      rover.direction = 'N'
      break;
    case 'S':
      rover.direction = 'E'
      break;
    case 'W':
      rover.direction = 'E'
      break;
  };
  	console.log("The Rover is now facing: " + rover.direction)
}

function turnRight(rover) {
  switch(rover.direction) {
    case 'N':
      rover.direction = 'E'
      break;
    case 'E':
      rover.direction = 'S'
      break;
    case 'S':
      rover.direction = 'W'
      break;
    case 'W':
      rover.direction = 'N'
      break;
  };

  console.log("The Rover is now facing: " + rover.direction)
}

function goForward(rover) {
  switch(rover.direction) {
    case 'N':
      rover.position[0]++
      break;
    case 'E':
      rover.position[1]++
      break;
    case 'S':
      rover.position[0]--
      break;
    case 'W':
      rover.position[1]--
      break;
  };

  console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]")
}

function goBack(rover) {
  switch(rover.direction) {
    case 'N':
      rover.position[0]--
      break;
    case 'E':
      rover.position[1]--
      break;
    case 'S':
      rover.position[0]++
      break;
    case 'W':
      rover.position[1]++
      break;
  };

  console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]")
}


function commandString (string, vehicle) {
	var stringArray = string.split('')
	for (var i = 0; i < string.length; i++ ) {
		if (stringArray[i] = "f") {
			goForward(vehicle);
	} else if (stringArray[i] = "b") {
			goBack(vehicle);
	} else if (stringArray[i] = "r") {
			turnRight(vehicle);	
	} else if (stringArray[i] = "l") {
			turnLeft(vehicle);
	} else {
		return "Invalid characters: please only use 'f''b''r' & 'l'"
	}}
}


commandString("ffrffbblbb", myRover);

/*
var grid = [
  [1, 2],
  [3, 4],
  [5, 6]
];
console.log(items[0][0]); // 1
console.log(items);
*/