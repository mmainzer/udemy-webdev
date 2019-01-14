// what it looks like without a loop (only runs once)

// var answer = prompt("Are we there yet!?");

// if(answer == "Yes") {
// 	alert("YAY, We made it!")
// } else {
// 	var answer = prompt("Are we there yet?!")
// }

// with a loop to repeat


// var answer = prompt("Are we there yet!?");

// while(answer != "Yes" && answer != "Yeah") {
// 	var answer = prompt("Are we there yet!?")
// }

// alert("YAY, WE MADE IT!!!")

var answer = prompt("Are we there yet!?");

while(answer.indexOf("yes") === -1) {
	var answer = prompt("Are we there yet!?")
}

alert("YAY, WE MADE IT!!!")