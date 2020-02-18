const express = require("express");
const router = express.Router();

const Media = require("../models/Media");

router.get("/", function(req, res) {
	Media.find().then(data => res.json(data));
});
module.exports = router;
