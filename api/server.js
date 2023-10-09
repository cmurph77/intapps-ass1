
const express = require('express');
const app = express();

const port = 3001;


app.get('/helloworld', (req, res) => {
  res.send('Hello World!');
  console.log("responce sent!")
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
