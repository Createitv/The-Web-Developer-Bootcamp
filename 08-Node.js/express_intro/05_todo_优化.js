// 0. 加载 Express
const express = require("express");
const fs = require("fs");
const { get } = require("http");
const { getDb, saveDb } = require("./db");

// 1. 调用 express() 得到一个 app
//    类似于 http.createServer()
const app = express();

// 配置解析json请求体
app.use(express.json());
// 配置解析x-www-form-urlencoded请求体
app.use(express.urlencoded());

// 2. 设置请求对应的处理函数
//    当客户端以 GET 方法请求 / 的时候就会调用第二个参数：请求处理函数
app.get("/todos", async (req, res) => {
	try {
		const db = await getDb();
		res.status(200).json(db.todos);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
});
app.get("/todos/:id", async (req, res) => {
	try {
		const db = await getDb();
		const todo = db.todos.find(
			(todo) => todo.id === Number.parseInt(req.params.id)
		);
		if (!todo) {
			return res.status(404).send("错误");
		}
		res.status(200).json(todo);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
});
app.post("/todos", async (req, res) => {
	try {
		// 1. 获取请求参数
		const todo = req.body;

		// 2. 数据验证
		if (!todo.title) {
			return res.status(404).json({ error: "404 Not Found" });
		}

		// 3. 数据通过更新到db
		const db = await getDb();
		const lastTodo = db.todos[db.todos.length - 1];
		todo.id = lastTodo ? lastTodo.id + 1 : 1;
		db.todos.push(todo);
		await saveDb(db);

		// 4. 发送响应
		res.status(200).json(todo);
		console.log(req.body);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
});

// 修改
app.patch("/todos/:id", async (req, res) => {
	try {
		// 1.获取表单数据
		const todo = req.body;
		// 2.查找要修改的数据项
		const db = await getDb();
		const ret = db.todos.find(
			(todo) => todo.id === Number.parseInt(req.params.id)
		);
		if (!ret) {
			return res.status(404).end();
		}
		Object.assign(ret, todo);
		await saveDb(db);

		// 3 发送响应
		res.status(201).json(ret);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
});

// 删除
app.delete("/todos/:id", async (req, res) => {
	try {
		const todoId = Number.parseInt(req.params.id);
		const db = await getDb();
		const index = db.todos.findIndex(todo => todo.id === todoId);
		if (index === -1) {
			return res.status(404).end();
		}
		db.todos.splice(index, 1);
		await saveDb(db);
		res.status(204).end();
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
});

// 3. 监听端口号，启动 Web 服务
app.listen(3000, () => console.log("app listening on port 3000!"));
