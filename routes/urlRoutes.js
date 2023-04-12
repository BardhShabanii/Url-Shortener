const express = require("express");
const router = express.Router();
const urlController = require("../controllers/urlController");

router.get("/", urlController.getHome);
router.post("/create", urlController.createUrl);
router.get("/:shortUrl", urlController.getShortUrl);

module.exports = router;
