const http = require("http");

const server = http.createServer((req, res) => {
	if (req.url === "/") {
		res.end("HOme page");
	} else if (req.url === "/about") {
		res.end("About page");
	} else {
		res.end(`<h1>Oops!</h1>
    <p>We can't seem to find the page you are looking for</p>
    <a href="/">back home</a>`);
	}
	// res.end("Error loading page");
});

server.listen(5000, () => {
	console.log("Server listening on port 5000....");
});
