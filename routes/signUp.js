const express = require('express');
const router = express.Router();
const signUpController = require('../controllers/signUpController');

router.get('/', signUpController.index);
router.post('/register', signUpController.register);

module.exports = router;
