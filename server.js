// load .env data into process.env
// require("dotenv").config();
const path = require('path');

const PORT = process.env.PORT || 8080;
const express = require("express");
const app = express();




app.use(express.static(path.join(__dirname, 'dist')));
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'))
});
app.listen(process.env.PORT || 8080, () => {

  console.log(`Example app listening on port ${PORT}`);


});

