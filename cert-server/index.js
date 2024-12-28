const express = require('express');
const app = express();

app.use(require("cors")())

app.get('/', async (req, res) => {
  res.send('Hello Certificate-Generator')
})

app.use('/api/root', require('./routes/root'));
app.use('/api/cert', require('./routes/cert'));
app.use('/api/req', require('./routes/req'));

app.listen(8001, "0.0.0.0", () => {
  console.log("Express listening: http://0.0.0.0:8001")
})
