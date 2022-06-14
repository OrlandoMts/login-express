var express = require('express');
var router = express.Router();
// const condb = require('../database/connection')

/* GET home page. */
// eslint-disable-next-line no-unused-vars
router.get('/', function(req, res, next) {
  // condb.query('SELECT * FROM users', (err, data) => {
  //   if(!err){
  //     res.send(data)
  //   } else {
  //     console.log("error de consulta")
  //   }
  // });
  res.render('index', { title: 'Express' });
});

module.exports = router;
