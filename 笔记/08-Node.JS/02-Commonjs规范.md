## 模块化

模块化是指将一个复杂的系统分解为多个模块，方便编码,同时降低代码复杂性，降低代码耦合度，方便部署，提高效率，避免了命名冲突，也可以减少变量空间污染，更好的分离代码，方便按需加载，更高的复用性，更高的可维护性。常见的模块化有`CommonJs、AMD、CMD、ES6`，下面就分别来介绍他们。

## `CommonJs`

`CommonJs`将每个`javaScript`文件当作是一个模块， 其内部定义的变量函数等都属于这个模块，我们可以向外部暴露我们想要暴露的。但是`CommonJs`必须在`node`环境下才能使用，它是为`node`而生的，只有使用node环境才能运行，而浏览器是不支持`CommonJs`的，必须使用一些转换工具，将我们服务器端的`CommonJs`语法转化为浏览器识别的语法。

在`CommonJs`中，每一个`javaScript`文件都会隐士的被包裹在一个立即函数里面，例如下面的例子

```xquery
var name = 'xxx'
module.exports = {
    name: name
}
```

最终会被转换成下面这个样子

```javascript
(function(exports, require, module, __filename, __dirname){
    var name = 'xxx'
    module.export = {
        name: name
    }
})
```

## `exports、 require、 module、 __filename、 __dirname`

`exports`和`module.exports`其实是一个东西，只不过需要注意使用`exports`不能改变它的指向。
`require`是用来引入我们需要的外部模块的，他是同步加载的，适用于服务器端。
`__filename`和`__dirname`分别是当前执行的文件路径和文件夹路径。

## 使用`CommonJs`

一般我们可以直接使用`node 文件名`直接将文件置于node环境运行，这样是完全ok的。但是倘若我们需要将它放到浏览器端运行，也就是引入到`html`文件中，由于浏览器是不认识前面我们说的`exports、require...`这些语法的，所以我们可以借助像`Browserify`这样的转换工具。我们看下面的例子

```javascript
// m1.js
module.exports = {
  name: 'xxx'
}

// m2.js
module.exports = {
  age: '100'
}

// main.js
const name = require('m1')
const age = require('m2')
console.log(name, age)

// index.html
...
<script src="./node_modules/main.js"></script>  
...
```

当我们打开html的时候浏览器是会报错的，如下

```xquery
Uncaught ReferenceError: require is not defined
    at main.js:1
```

我们可以借助[Browserify](https://link.segmentfault.com/?url=http%3A%2F%2Fbrowserify.org%2F)，将`Browserify`下载下来，将我们的`main.js`使用它转换后，将转换后的文件引入页面中，修改后我们就能正常运行了，修改后的html代码如下

```xml
<script src="./node_modules/bundle.js"></script>  
```

`browerify`用法很简单，可以看它的文档