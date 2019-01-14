// while loop syntax

// while(someCondition) {
// 	// run some code
// }

console.log("PRINTING ALL NUMBER BETWEEN -10 AND 19")

var counter = -10;

while(counter < 20) {
	console.log(counter);
	counter++;
}

console.log("PRINTING ALL EVEN NUMBERS BETWEEN 10 AND 40");

var counter = 10

while(counter <= 40) {
	if(counter % 2 == 0) {
		console.log(counter);
	}
	counter+=1;
}

console.log("PRINT ALL ODD NUMBERS BETWEEN 300 AND 333")

var counter = 300

while(counter <= 333) {
	if(counter % 2 != 0) {
		console.log(counter);
	}
	counter+=1;
}

console.log("PRINT ALL NUMBERS DIVISIBLE BY 5 AND 3 THAT ARE BETWEEN 5 AND 50")

var counter = 5

while(counter <= 50) {
	if(counter % 3 == 0 && counter % 5 == 0) {
		console.log(counter);
	}
	counter+=1;
}