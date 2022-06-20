var express = require('express');
const homeController = require('../controllers/homeController');
var router = express.Router();
// const condb = require('../database/connection')

/* GET home page. */
// eslint-disable-next-line no-unused-vars
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// eslint-disable-next-line no-unused-vars
// verificar si esta autenticado
router.get('/home', homeController.isAuthenticated, homeController.index);

router.get('/logout', homeController.logout);

module.exports = router;
