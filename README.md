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
