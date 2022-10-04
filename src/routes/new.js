const express = require('express');

const router = express.Router();
const newsController = require('../app/controllers/newController');

router.get('/store', newsController.New);

module.exports = router;
