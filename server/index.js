const express = require('express');
const db = require('../database/index.js');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('./client/dist'));

app.listen(port, () => {
  console.log('the freaking thing worked dammit');
})
