const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'food',
  password: 'food',
  multipleStatements: true,
});

module.exports = connection;