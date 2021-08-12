var net = require("net");

var server = net.createServer();
const port = 3500;

server.on("connection", function (socket) {
	console.log(
		"Client connected from",
		socket.remoteAddress,
		socket.remotePort
	);
	socket.write("Hello from the server!");

	socket.on("data", function (data) {
		console.log("Msg from client:", data.toString());
	});

	socket.on("close", function (err) {
		if (err) {
			console.log("Client disconnected due to error");
		} else {
			console.log("Client disconnected");
		}
	});
});

server.on("listening", function () {
	console.log("Server is listening on port", port);
});

server.listen(port);
