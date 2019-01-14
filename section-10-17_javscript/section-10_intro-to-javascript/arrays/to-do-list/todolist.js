var todos = ["Buy new turtles"]

var input = prompt("what would you like to do? Select new, list, delete, or quit.")



while (input !== "quit") {
	//handle new input
	if (input === "list") {
		listTodos();
	} else if (input === "new") {
		addTodo();
	} else if(input ==="delete"){
		deleteTodo();
	}
	// ask again for new input
	input = prompt("what would you like to do? Select new, list, or quit.")
}
console.log("Ok, you quit the app.");


function listTodos(){
	console.log("*********");
	todos.forEach(function(todo, i){
		console.log(i + ": " + todo);
	});
	console.log("*********");
}

function addTodo(){
	var newToDo = prompt("Enter new todo");
	todos.push(newToDo);
	console.log("added todo");
}

function deleteTodo(){
	//ask for index of todo needing deletion
	var index = prompt("Enter index of todo to delete")
	//delete that to do
	todos.splice(index, 1);
	console.log("deleted todo");
}