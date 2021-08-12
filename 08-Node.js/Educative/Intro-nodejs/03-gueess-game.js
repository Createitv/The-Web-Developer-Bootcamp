const readline = require("readline");

let rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

function getRandomIntInclusive(min, max) {
	min = Math.ceil(min);
	max = Math.ceil(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

let tries = 3;
let randomNumber = getRandomIntInclusive(1, 10);
// console.log(randomNumber);
rl.setPrompt("Guess the number! (1 - 10):");
rl.prompt();
rl.on("line", function (answer) {
	tries--;
	game(tries, randomNumber, answer);
	rl.prompt();
});
function game(tries, randomNumber, guess) {
	if (tries > 0) {
		if (guess == randomNumber) {
			console.log("WINNER");
			process.exit();
		} else if (guess < randomNumber) {
			console.log("TOO LOW");
		} else if (guess > randomNumber) {
			console.log("TOO HIGH");
		} else {
			console.log("NOT A NUMBER");
		}
	} else {
		if (guess == randomNumber) {
			console.log("WINNER");
		} else {
			console.log("YOU LOSE! THE NUMBER WAS:", randomNumber);
		}
		process.exit();
	}
}
