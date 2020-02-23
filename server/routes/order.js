const express = require("express");
const router = express.Router();

const Order = require("../models/Order");

router.post("/", (req, res) => {
	const newOrder = new Order({
		created: new Date(),
		name: req.body.order.name,
		cart: req.body.cart,
		email: req.body.order.email,
		message: req.body.order.message
	});

	newOrder
		.save()
		.then(data => {
			res.json(data);
		})
		.then(
			router.get("/order/:id", function(req, res) {
				const { id } = req.params;

				Order.find({ _id: req.params }, (err, order) => {
					if (err) res.status(500).send(error);
				});
				res.status(200).json(order);
			})
		);
});

router.get("/", function(req, res) {
	Order.find().then(data => res.json(data));
});
module.exports = router;
