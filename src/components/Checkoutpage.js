import React from "react";
import { connect } from "react-redux";
import CheckoutForm from "../features/checkoutListing/CheckoutForm";
import Checkout from "../features/checkoutListing/";

function submitOrder(values, cart) {
	fetch("http://localhost:5000/order", {
		method: "POST",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
			credentials: "same-origin"
		},

		body: JSON.stringify({
			...values,
			cart
		})
	})
		.then(response => response.json())

		.then(response => (window.location = `http://localhost:3000/thanks`))

		.catch(error => {
			console.error(error);
		});
}

function Checkoutpage(props) {
	const cart = props.cart;
	return (
		<div className="wrapper">
			<div className="container">
				<h2>Checkout</h2>
				<Checkout />
				<CheckoutForm onSubmit={values => submitOrder(values, cart)} />
			</div>
		</div>
	);
}

function mapStateToProps(state) {
	return {
		cart: state.cart
	};
}

export default connect(mapStateToProps)(Checkoutpage);
