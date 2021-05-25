const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const routes = require('./routes.js')
app.use('/data', routes);
app.use('/', express.static('./client/dist'));


module.exports = app;