const express = require("express");
const router = express.Router();

const Game = require("../models/Game");

router.get("/", function(req, res) {
	Game.find().then(data => res.json(data));
});
module.exports = router;
