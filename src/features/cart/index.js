import React from "react";

import { connect } from "react-redux";

const sort = items => {
	// eslint-disable-next-line
	return items.sort((a, b) => {
		if (a.appid !== b.appid) {
			return a.appid - b.appid;
		}
	});
};

function Cart(props) {
	return (
		<div className="cart">
			{props.cart.length === 0 ? (
				<div className="empty">Your shopping cart is empty.</div>
			) : (
				<table>
					<thead>
						<tr>
							<th>Items</th>
							<th>Quantity</th>
							<th></th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						{sort(props.cart).map(item => (
							<tr key={item.name}>
								<td className="first-td">{item.name}</td>
								<td>{item.quantity}</td>
								<td>
									<button onClick={() => props.addToCart(item)}>+</button>
								</td>
								<td>
									<button onClick={() => props.removeFromCart(item)}>-</button>
								</td>
								<td>
									<button
										className="last"
										onClick={() => props.removeAllFromCart(item)}
									>
										Remove all
									</button>
								</td>
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

function mapDispatchToProps(dispatch) {
	return {
		addToCart: item => {
			dispatch({ type: "ADD", payload: item });
		},
		removeFromCart: item => {
			dispatch({ type: "REMOVE", payload: item });
		},
		removeAllFromCart: item => {
			dispatch({ type: "REMOVE_ALL", payload: item });
		}
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
