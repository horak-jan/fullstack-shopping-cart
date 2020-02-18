const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const OrderSchema = new Schema({
	created: {
		type: String
	},
	name: {
		type: String
	},
	email: {
		type: String
	},
	message: {
		type: String
	},
	gift: {
		type: Boolean
	},
	cart: []
});

const Order = mongoose.model("Order", OrderSchema);

module.exports = Order;
