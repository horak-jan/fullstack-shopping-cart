const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const MediaSchema = new Schema({
	steam_appid: {
		type: Number
	},
	header_image: {
		type: String
	},
	screenshots: [String],
	background: {
		type: String
	}
});

const Media = mongoose.model("Media", MediaSchema);

module.exports = Media;
