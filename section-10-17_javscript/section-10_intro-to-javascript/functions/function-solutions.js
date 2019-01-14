//ISEVEN()

// function isEven(num) {
// 	//retern true if even
// 	if (num % 2 === 0) {
// 		return true;
// 	//return false otherwise
// 	} else {
// 		return false
// 	}
	
// }
num = Number(prompt("Give me a number!"));

function isEven(num) {
	return num % 2 === 0;
}

//FACTORIAL()

function factorial(num) {
	// define result variable
	var result = 1;
	// calculate factorial and store value in result
	for(var i = 2; i <= num; i++){ // start at 2 because 1 is unnecessary
		result = result * i
	}
	// return the result variable
	return result
}

// factorial(4) 4 x 3 x 2 x 1

//KEBABTOSNAKE()

function kebabToSnake(str) {
	// replace all '-' with '_'
	var newStr = str.replace(/-/g , "_");
	// return str
	return newStr;
}