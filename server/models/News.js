const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const NewsSchema = new Schema({
	Date: {
		type: String
	},
	Title: {
		type: String
	},
	Image: {
		type: String
	},
	Text: {
		type: String
	}
});

const News = mongoose.model("News", NewsSchema);

module.exports = News;
