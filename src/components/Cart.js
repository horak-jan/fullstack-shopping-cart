import React from "react";
import Cart from "../features/cart";

export default function Cartpage(props) {
	return (
		<div className="wrapper">
			<div className="container">
				<h2>Cart</h2>
				<Cart />
			</div>
		</div>
	);
}
