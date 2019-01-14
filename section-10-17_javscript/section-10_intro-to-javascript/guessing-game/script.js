// create secretNumber
var secretNumber = 4;

//prompy user for a guess
var guess = Number(prompt("Guess a number"));

//check if guess is correct
if (guess === secretNumber) {
	alert("You got it right!");
}

//check if guess is higher
else if(guess > secretNumber) {
	alert("Too high! Guess again.");
}

else {
	alert("Too low! One more time...");
}

