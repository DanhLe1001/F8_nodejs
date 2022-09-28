const express = require('express');

const router = express.Router();
const siteController = require('../app/controllers/stieController');

router.get('/abcd', siteController.abcd);
router.get('/', siteController.index);

module.exports = router;
