# certificate-generator

### Front-end

- cert-generator: vite + (vue + element ui) -> (vue3 + element plus)

### Back-end

- service: node + express + (mogoose) -> (lowdb)

### DB

- [Express数据库集成](https://nodejs.cn/express/guide/database-integration/#sqlite)

- 1. mongodb
  ```
  docker run -itd --name mongodb -p 27017:27017 -v /mnt/dtt/data/mongodb:/data/db mongo:4.4
  ```
- 2. sqlite3
  - [在 Express.js 中使用 SQLite：一份完整的教程](https://www.javascriptcn.com/post/65c8b71badd4f0e0ff27b708)

- 3. lowdb
  - [学习Lowdb小型本地JSON数据库](https://www.cnblogs.com/tugenhua0707/p/11403202.html)
  - [探索轻量级JSON数据库：LowDB详解与实战](https://www.showapi.com/news/article/66ec3f9e4ddd79f11a0fe243)

### nodejs

- 1. node原生crypto签发证书
  - [Node.js v23.5.0 文档](https://nodejs.cn/api/crypto.html)
  - [node crypto生成公钥私钥进行数据加解密](https://juejin.cn/post/6999135078043353118)

- 2. element plus
  - [element组件](https://element.eleme.cn/#/zh-CN/component/installation)
  - [element plus组件](https://element-plus.org/zh-CN/component/overview.html)

- 3. node-forge
  - [给 localhost 颁发一份证书](https://blog.sww.moe/post/certificate/)

