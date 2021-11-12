// 0. 加载 Express
const express = require("express");

// 1. 调用 express() 得到一个 app
//    类似于 http.createServer()
const app = express();

// 2. 设置请求对应的处理函数
//    当客户端以 GET 方法请求 / 的时候就会调用第二个参数：请求处理函数
app.get("/", (req, res) => {
	res.send("hello world");
});

// 当你以 POST 方法请求 / 的时候，指定对应的处理函数
app.post("/", function (req, res) {
	res.send("Got a POST request");
});

app.put("/user", function (req, res) {
	res.send("Got a PUT request");
});

app.delete("/user", function (req, res) {
	res.send("Got a DELETE request");
});

// 3. 监听端口号，启动 Web 服务
app.listen(3000, () => console.log("app listening on port 3000!"));
