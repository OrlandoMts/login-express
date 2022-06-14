/* eslint-disable no-console */
const mysql = require('mysql');

let connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: 'orlando',
  password: 'orlando1119!',
  database: 'ware'
});

connection.connect((error) => {
  if (error) {
    console.log(error);
    return
  } else {
    console.log('Connection success.');
  }
});

module.exports = connection;

