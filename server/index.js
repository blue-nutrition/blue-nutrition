const express = require('express');
const db = require('../database/index.js');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('./client/dist'));

db.on('aquire', (connection) => {
  console.log('Connection aquired: ', connection.threadId);
})

db.on('connection', () => {
  connection.query('SET SESSION auto_increment_increment=1')
});

db.on('connection', function (connection) {
  connection.query('SET SESSION auto_increment_increment=1')
});

db.on('enqueue', function () {
  console.log('Waiting for available connection slot');
});

db.on('release', function (connection) {
  console.log('Connection %d released', connection.threadId);
});

db.connect((err) => {
  if (err) throw err;
  console.log('Connected to mysql database.');
});


app.listen(port, () => {
  console.log('the freaking thing worked dammit');
})
