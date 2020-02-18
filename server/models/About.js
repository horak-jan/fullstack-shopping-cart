const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const AboutSchema = new Schema({
	steam_appid: {
		type: Number
	},
	detailed_description: {
		type: String
	},
	about_the_game: {
		type: String
	},
	short_description: {
		type: String
	}
});

const About = mongoose.model("About", AboutSchema);

module.exports = About;
