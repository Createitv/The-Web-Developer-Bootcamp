const http = require("http");
const fs = require("fs");

const hostname = "127.0.0.1";
const port = 35200;

const homePage = fs.readFileSync("main.html");

const server = http.createServer((req, res) => {
	res.statusCode = 200;
	res.setHeader("Content-Type", "text/html");
	res.write(homePage);
	res.end();
});

server.listen(port, hostname, () => {
	console.log("Server is now running");
});
