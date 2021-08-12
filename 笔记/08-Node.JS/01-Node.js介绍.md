## 1.  Node.js简介

Node.js 是一个开源与跨平台的 JavaScript 运行时环境。 它是一个可用于几乎任何项目的流行工具！

Node.js 在浏览器外运行 V8 JavaScript 引擎（Google Chrome 的内核）。 这使 Node.js 表现得非常出色。

Node.js 应用程序运行于单个进程中，无需为每个请求创建新的线程。 Node.js 在其标准库中提供了一组异步的 I/O 原生功能（用以防止 JavaScript 代码被阻塞），并且 Node.js 中的库通常是使用非阻塞的范式编写的（从而使阻塞行为成为例外而不是规范）。

当 Node.js 执行 I/O 操作时（例如从网络读取、访问数据库或文件系统），Node.js 会在响应返回时恢复操作，而不是阻塞线程并浪费 CPU 循环等待。

这使 Node.js 可以在一台服务器上处理数千个并发连接，而无需引入管理线程并发的负担（这可能是重大 bug 的来源）。

Node.js 具有独特的优势，因为为浏览器编写 JavaScript 的数百万前端开发者现在除了客户端代码之外还可以编写服务器端代码，而无需学习完全不同的语言。

在 Node.js 中，可以毫无问题地使用新的 ECMAScript 标准，因为不必等待所有用户更新其浏览器，你可以通过更改 Node.js 版本来决定要使用的 ECMAScript 版本，并且还可以通过运行带有标志的 Node.js 来启用特定的实验中的特性。

### Node.js 框架和工具

Node.js 是一个底层的平台。 为了使开发者做事变得容易又来劲，社区在 Node.js 上构建了数千个库。

久而久之，其中许多已成为受欢迎的选择。 以下是一些值得学习的清单：

-   [**AdonisJs**](https://adonisjs.com/): 一个全栈框架，高度专注于开发者的效率、稳定和信任。 Adonis 是最快的 Node.js Web 框架之一。
-   [**Express**](https://expressjs.com/): 提供了创建 Web 服务器的最简单但功能最强大的方法之一。 它的极简主义方法，专注于服务器的核心功能，是其成功的关键。
-   [**Fastify**](https://fastify.io/): 一个 Web 框架，高度专注于提供最佳的开发者体验（以最少的开销和强大的插件架构）。 Fastify 是最快的 Node.js Web 框架之一。
-   [**Gatsby**](https://www.gatsbyjs.com/): 一个基于 [React](https://reactjs.org/)、由 [GraphQL](https://graphql.org/) 驱动的静态网站生成器，具有非常丰富的插件和启动器生态系统。
-   [**hapi**](https://hapijs.com/): 一个富框架，用于构建应用程序和服务，使开发者可以专注于编写可重用的应用程序逻辑，而不必花费时间来搭建基础架构。
-   [**koa**](http://koajs.com/): 由 Express 背后的同一个团队构建，旨在变得更简单更轻巧。 新项目的诞生是为了满足创建不兼容的更改而又不破坏现有社区。
-   [**Loopback.io**](https://loopback.io/): 使构建需要复杂集成的现代应用程序变得容易。
-   [**Meteor**](https://meteor.com/): 一个强大的全栈框架，以同构的方式使用 JavaScript 构建应用（在客户端和服务器上共享代码）。 曾经是提供所有功能的现成工具，现在可以与前端库 [React](https://reactjs.org/)，[Vue](https://vuejs.org/) 和 [Angular](https://angular.io/) 集成。 也可以用于创建移动应用。
-   [**Micro**](https://github.com/zeit/micro): 提供了一个非常轻量级的服务器，用于创建异步的 HTTP 微服务。
-   [**NestJS**](https://nestjs.com/): 一个基于 TypeScript 的渐进式 Node.js 框架，用于构建企业级的高效、可靠和可扩展的服务器端应用程序。
-   [**Next.js**](https://nextjs.org/): 一个 [React](https://reactjs.org/) 框架，可为你提供生产所需的所有功能的最佳开发者体验：混合静态和服务器渲染、TypeScript 支持、智能捆绑、路由预取等。
-   [**Nx**](https://nx.dev/): 使用 NestJS、Express、[React](https://reactjs.org/)、[Angular](https://angular.io/) 等进行全栈开发的工具包！ Nx 有助于将开发工作从一个团队（构建一个应用程序）扩展到多个团队（在多个应用程序上进行协作）！
-   [**Sapper**](https://sapper.svelte.dev/): Sapper 是一个用于构建各种规模的 Web 应用程序的框架，具有出色的开发体验和灵活的基于文件系统的路由。还提供 SSR 等！
-   [**Socket.io**](https://socket.io/): 一个实时通信引擎，用于构建网络应用程序。
-   [**Strapi**](https://strapi.io/): Strapi 是一个灵活的开源 Headless CMS，可使开发者可以自由选择自己喜欢的工具和框架，同时还允许编辑人员轻松地管理和分发其内容。 通过使管理面板和 API 可以通过插件系统进行扩展，Strapi 使全球最大的公司能够加速内容交付，同时构建优美的数字体验。

## 2.  Node.js简史

[**朴灵大大的 -- Node.js 简史**](https://cnodejs.org/topic/555d3d54e684c4c8088a0d78)

## 3. 安装

[nodejs官网安装](https://nodejs.org/zh-cn/download/)

## 4. 预备知识

-   词汇结构
-   表达式
-   数据类型
-   变量
-   函数
-   this
-   箭头函数
-   循环
-   作用域
-   数组
-   模板字面量
-   分号
-   严格模式
-   ECMAScript 6、2016、2017

具备这些概念，无论是在浏览器还是在 Node.js 中，都会成为一名熟练的 JavaScript 开发者。

以下概念也是理解异步编程的关键，异步编程是 Node.js 的基本组成部分：

-   ！异步编程与回调
-   定时器
-   ！Promise
-   ！Async 与 Await
-   闭包
-   ！事件循环

## 5. 与浏览器的区别

没有`DOM` `BOM`,可以与操作系统打交道，以V8引擎为内核

## 6. 基本库

`fs` `asstet` `Error` `http` `module` `path` `os` `stream` `url` `tty` `net` 

## 7. 包生态

[npm](https://www.npmjs.com/)涵盖格式各样。

## 8. 基本架构

![image.png](01-Node.js%E4%BB%8B%E7%BB%8D/a7d3a9d9856345999af421eef3c3dbae~tplv-k3u1fbpfcp-watermark.awebp)

### 中间层之下

Node.js 是运行于操作系统之上，而操作系统上一层：

-   V8 JavaScript Engine: 由内存堆、调用栈和垃圾收集器组成，把 JS 代码转换成给定操作系统的机器码
-   libuv: 由线程池、事件循环与事件队列组成，是处理非阻塞异步 I/O 操作的多平台 C 语言库，提供了机制处理诸如文件系统、DNS、网络、子进程、管道、信号量控制、轮询、数据流
-   c-ares: 处理 DNS 请求的 C 语言库
-   llhttp: 解析 HTTP 请求/响应（以前使用 http-parse）
-   OpenSSL: 全功能支持 TLS/SSL 协议的工具包，也是个通用加密库
-   zlib: 用于同步、异步和数据流的压缩解压

### 中间层

-   Node.js Bindings：将底层 C/C++ 写的库的接口暴露给 JS 环境
-   Node.js Standard Library: 提供了 Node.js 本身的核心模块，见文档
-   C/C++ AddOns：用户自己写的 C/C++ 模块，通过桥接的方式提供给 Node.js

### 中间层之上

-   Node.js API: 暴露给 Node.js 应用的 JS API
-   我们使用 Node.js 开发应用，主要是使用 Node.js API，所以 Node.js 应用最终运行于 Node.js API 之上

## 参考

1.  https://juejin.cn/post/6940999521241399332
2.  https://nodejs.org/zh-cn/download/
3.  http://nodejs.cn/learn/an-introduction-to-the-npm-package-manager