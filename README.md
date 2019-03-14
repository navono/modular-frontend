# Modular-frontend

使用 `lerna` 与 `single-spa` 进行构建与管理。最初源码来自于 [Fantasy9527](https://github.com/Fantasy9527/microfrontend-base-demo)

## Dev

TODO

## Build

运行：
> yarn build

目前还没有实现 `project.config.js` 的自动生成与更新，所有需要手动增加 `project.config.js` 文件，同时增加以下内容：

```js
module.exports = {
  projects: [
    {
      "name": "basemodule",
      "prefix": "/basemodule/",
      "main": "/basemodule/main.js",
      "store": "/basemodule/store.js",
      "base": true
    },
    {
      "name": "submodule",
      "path": ["/module1"],
      "prefix": "/submodule/",
      "main": "/submodule/main.js",
      "store": "/submodule/store.js"
    }
  ]
}
```

然后可以使用 `http-server` 进行验证：
> npx http-server ./build
