var net = require("net");

const client = net.connect({ port: 3500 }, () => {
	console.log("Connection established");
	client.write("Hello from client");
});

client.on("data", (data) => {
	console.log("Msg from server:", data.toString());
});

client.on("end", () => {
	console.log("disconnected from server");
});
