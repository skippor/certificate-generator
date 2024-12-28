//express_demo.js 文件
const express = require('express');

const app = express();

app.use(require("cors")())


app.get('/', async (req, res) => {
  res.send('Hello World')
})

app.listen(8001, "0.0.0.0", () => {
  console.log("Express listening: http://0.0.0.0:8001")
})