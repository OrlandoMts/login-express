const express = require('express');
const router = express.Router();
const signInController = require('../controllers/signInController');

router.get('/', signInController.index);

module.exports = router;
