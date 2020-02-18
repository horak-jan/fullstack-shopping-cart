import React from "react";

export default function addButton(props) {
	return (
		<button onClick={() => props.addToCart(props.game)}>
			Add to cart ( {(props.cartItem && props.cartItem.quantity) || 0} )
		</button>
	);
}
