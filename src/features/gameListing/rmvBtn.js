import React from "react";

export default function addButton(props) {
	return (
		<button onClick={() => props.removeFromCart(props.game)}>Remove</button>
	);
}
