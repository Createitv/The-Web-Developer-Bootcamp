const fs = require("fs");

fs.readFile("test.txt", "utf8", (err, data) => {
	if (err) {
		console.error(err);
		return;
	}
	console.log(data);
});
console.log("Hello World!");

fs.stat("test.txt", (err, stats) => {
	if (err) {
		console.error(err);
		return;
	}
	console.log(stats);
});
