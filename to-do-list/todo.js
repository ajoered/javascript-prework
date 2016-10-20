
window.onload = function() {

// the following code adds event listeners to the buttons
// you'll learn more about this later
// for this exercise, you are going to write the functions for
// what happens when the user clicks on the buttons.
  var saveButton = document.getElementById('save-button');
  saveButton.addEventListener('click', addToDoItem, false);

  var doneButton = document.getElementById('done-button');
  doneButton.addEventListener('click', markAsDone, false);


  function addToDoItem() {
  	var newToDoItem = document.createElement('li');
  	var formContents = document.getElementById("todo-input").value; //extract content from form
  	var textNode = document.createTextNode(formContents); // create a text node
    
	newToDoItem.appendChild(textNode);

    var toDoList = getElementbyClassName("todo-list-items")[0];
	
	toDoList.insertBefore(newToDoItem, toDoList.childNodes[0]);

  }

  function markAsDone() {
    doneButton.classList.add('liked');
    doneButton.innerHTML = "Liked!";
    document.querySelector('h1').style.color = "red";
  }
  
}

/*
The ‘Save’ button should take the value from the input field and add it as a new li to the To-Do list.

The ‘Done’ button should remove the first list item from the To-Do list and add it to the Done list. 
Remember to add the correct class to get the strikethrough.