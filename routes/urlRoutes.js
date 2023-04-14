const express = require("express");
const router = express.Router();
const urlController = require("../controllers/urlController");

router.get("/", urlController.getHome);
router.get("/:shortUrl", urlController.getShortUrl);
router.post("/create", urlController.createUrl);
module.exports = router;
