process.on("beforeExit", () => {
	console.log("blue");
});

process.on("exit", () => {
	console.log("green");
});

console.log("red");
process.exit();
