const express = require('express');
const router = express.Router();
const signInController = require('../controllers/signInController');

router.get('/', signInController.index);
router.post('/login', signInController.login);

module.exports = router;
