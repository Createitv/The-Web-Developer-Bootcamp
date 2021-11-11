// 同步阻塞
var fs = require("fs");
var data = fs.readFileSync("./01-event-loop.js");
// console.log(data.toString());

// 异步非阻塞
fs.readFile("./01-event-loop.js", function (err, data) {
	if (err) throw err;
	console.log(data.toString());
});

// 先输出程序执行完毕再打印程序内容
console.log("程序执行完毕");
