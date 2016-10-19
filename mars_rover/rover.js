var myRover = {
  position: [0,0], 
  direction: 'N'
};

function reset(rover) {
  rover.position[0] = 0;
  rover.position[1] = 0;
  rover.direction = 'N';
 console.log("Reset Rover position to: [" + rover.position[0] + ", " + rover.position[1] + "]");
 console.log("Reset Rover to face: " + rover.direction);
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
      rover.direction = 'S'
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
    	if (rover.position[1] < 10)
   		   rover.position[1]++
   		else
   			rover.position[1] = 0
      break;
    case 'E':
      if (rover.position[0] < 10)
   		   rover.position[0]++
   		else
   			rover.position[0] = 0
      break;
    case 'S':
      if (rover.position[1] > 0)
      		rover.position[1]--
   		else
   			rover.position[1] = 10
      break;
    case 'W':
      if (rover.position[0] > 0)
   		   rover.position[0]--

   		else
   			rover.position[0] = 10
      break;
  };

  console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]")
}

function goBack(rover) {
  switch(rover.direction) {
    case 'N':
      	if (rover.position[1] > 0)
   		   rover.position[1]--
   		else
   			rover.position[1] = 10
      break;
    case 'E':
      	if (rover.position[0] > 0)
   		   rover.position[0]--
   		else
   			rover.position[0] = 10
      break;
    case 'S':
      	if (rover.position[1] < 10)
   		   rover.position[1]++
   		else
   			rover.position[1] = 0
      break;
    case 'W':
      	if (rover.position[0] < 10)
   		   rover.position[0]++
   		else
   			rover.position[0] = 0
      break;
  };

  console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]")
}


function commandString (string, vehicle) {
	var stringArray = string.split('')
	for (var i = 0; i < string.length; i++ ) {
			switch (stringArray[i]){
				case "f":
					goForward(vehicle);
					break;
				case "b":
					goBack(vehicle);
					break;
				case "r":
					turnRight(vehicle);	
					break;
				case "l":
					turnLeft(vehicle);
					break;
				default:
					return prompt("Invalid characters: please only use 'f''b''r' & 'l'");
		}
	}
}

reset(myRover);
commandString("bbbbbbbbbbbbbbb", myRover);

/*
function 2DArray(rows) {
  var arr = [];

  for (var i=0;i<rows;i++) {
     arr[i] = [];
  }

  return arr;
}

var grid = [
  [1, 2],
  [3, 4],
  [5, 6]
];
*/