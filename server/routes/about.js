const express = require("express");
const router = express.Router();

const About = require("../models/About");

router.get("/", function(req, res) {
	About.find().then(data => res.json(data));
});
module.exports = router;
