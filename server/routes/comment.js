const express = require("express");
const router = express.Router();

const Comment = require("../models/Comment");

router.post("/", (req, res) => {
	const newComment = new Comment({
		created: new Date(),
		username: req.body.username,
		body: req.body.body,
		newsId: req.body.newsId
	});

	newComment.save().then(data => {
		res.json(data);
	});
});

router.get("/", function(req, res) {
	Comment.find().then(data => res.json(data));
});
module.exports = router;
