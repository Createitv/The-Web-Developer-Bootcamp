// 0. 加载 Express
const express = require("express");
const fs = require("fs");

// 1. 调用 express() 得到一个 app
//    类似于 http.createServer()
const app = express();

// 2. 设置请求对应的处理函数
//    当客户端以 GET 方法请求 / 的时候就会调用第二个参数：请求处理函数
app.get("/todos", (req, res) => {
	fs.readFile("./db.json", "utf8", (err, data) => {
		if (err) {
			return res.status(500).json({
				error: err.message,
			});
		}
		const db = JSON.parse(data);
		res.status(200).json(db.todos);
	});
});
app.get("/todos/:id", (req, res) => {
    fs.readFile("./db.json", "utf8", (err, data) => {
		if (err) {
			return res.status(500).json({
				error: err.message,
			});
		}
		const db = JSON.parse(data);
		const todo = db.todos.find((todo) => todo.id === Number.parseInt(req.params.id));
		if (!todo) {
			return res.status(404).end();
		}
		res.status(200).json(todo);

	});
});
app.post("/todos", (req, res) => {
	res.send("post /todos");
});
app.patch("/todos/:id", (req, res) => {
	res.send("patch /todos/:id");
});
app.delete("/todos/:id", (req, res) => {
	res.send("get /todos/:id");
});

// 3. 监听端口号，启动 Web 服务
app.listen(3000, () => console.log("app listening on port 3000!"));
