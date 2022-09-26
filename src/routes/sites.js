const express = require("express");

const router = express.Router();
const siteController = require("../app/controllers/stieController");

router.use("/abcd", siteController.abcd);
router.use("/", siteController.index);

module.exports = router;
