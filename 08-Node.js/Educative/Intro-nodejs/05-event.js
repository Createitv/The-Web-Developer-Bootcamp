const EventEmitter = require("events");

const myEmitter = new EventEmitter();

someFunction = function () {
	console.log("Something has happended");
};

myEmitter.on("Some events", someFunction);

myEmitter.emit("Some events");

let n = 0;
anotherFunction = function () {
	n++;
	console.log(`value of n is: ${n}`);
};

// myEmitter.on("event", anotherFunction);
myEmitter.once("event", anotherFunction);
myEmitter.emit("event");
myEmitter.emit("event");
myEmitter.emit("event");
