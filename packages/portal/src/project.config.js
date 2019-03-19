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