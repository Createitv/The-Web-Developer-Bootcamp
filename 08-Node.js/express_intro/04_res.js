// 0. 加载 Express
const express = require("express");

// 1. 调用 express() 得到一个 app
//    类似于 http.createServer()
const app = express();

// 2. 设置请求对应的处理函数
//    当客户端以 GET 方法请求 / 的时候就会调用第二个参数：请求处理函数
app.get("/", (req, res) => {
    //  设置响应状态码
    res.statusCode = 201
    // res.write("a")
    // res.write("b")
    // res.write("ac")
	// res.send("hello world");
    // 结束响应

    // 发送json数据
    // res.send({ 'title': "Hello" })
    res.status(404).send("error")

});

// 3. 监听端口号，启动 Web 服务
app.listen(3000, () => console.log("app listening on port 3000!"));
