const express = require("express");
const router = express.Router();

const News = require("../models/News");

router.post("/", (req, res) => {
	const news = new News({
		Title: req.body.Title,
		Date: req.body.Date,
		Image: req.body.Image,
		Text: req.body.Text
	});

	news.save().then(data => {
		res.json(data);
	});
});

router.get("/", function(req, res) {
	News.find().then(data => res.json(data));
});
module.exports = router;
