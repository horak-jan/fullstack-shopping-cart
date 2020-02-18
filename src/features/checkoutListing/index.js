import React from "react";

import { connect } from "react-redux";

function Checkout(props) {
	return (
		<div className="cart">
			{props.cart.length === 0 ? (
				<div className="empty">Your shopping cart is empty.</div>
			) : (
				<table>
					<thead>
						<tr>
							<th className="checkout-td">Items</th>
							<th className="checkout-td">Quantity</th>
							<th className="checkout-td">Price</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						{props.cart.map(item => (
							<tr key={item.name}>
								<td className="checkout-td">{item.name}</td>
								<td className="checkout-td">{item.quantity}</td>

								<td className="checkout-td">{item.price}</td>
							</tr>
						))}
					</tbody>
				</table>
			)}
		</div>
	);
}

function mapStateToProps(state) {
	return {
		cart: state.cart
	};
}

export default connect(mapStateToProps)(Checkout);
