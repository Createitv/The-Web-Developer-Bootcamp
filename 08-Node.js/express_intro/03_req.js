const express = require("express");

const app = express();


// req请求对象，res响应对象
// 请求对象继承http.IncomingMessage, 响应继承http.ServeResponse响应对象 内部还是http模块
app.get("/", (req, res) => {
    console.log(req.url);
    console.log(req.method);
    console.log(req.headers);
    console.log(req.cookies);
    console.log(req.hostname);
    console.log(req.path);
    console.log(req.protocol);
    console.log(req.subdomains);
    console.log(req.params);
    console.log(req.secure);
    //  请求params参数
    console.log("请求参数", req.query);
    res.send("Hello, world!");
})

app.listen(3000, () => {
    console.log("Server listening on port 3000");
})