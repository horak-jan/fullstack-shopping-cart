const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const GameSchema = new Schema({
	appid: {
		type: Number
	},
	name: {
		type: String
	},
	developer: {
		type: String
	},
	platforms: [String],
	genres: [String],
	categories: [String],
	achievements: {
		type: Number
	},
	positive_ratings: {
		type: Number
	},
	negative_ratings: {
		type: Number
	},
	owners: {
		type: String
	},
	price: {
		type: Number
	}
});

const Game = mongoose.model("Game", GameSchema);

module.exports = Game;
