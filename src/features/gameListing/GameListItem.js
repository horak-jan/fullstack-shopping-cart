import React from "react";
import AddButton from "./addBtn";
import RmvButton from "./rmvBtn";

export default function GameListItem(props) {
	return props.game && props.media === undefined ? null : (
		<div className="gameListItem">
			<h3>{props.game.name}</h3>
			<img
				height={100}
				title={props.game.name}
				alt="desc"
				src={props.media.header_image}
			/>
			<div className="game">
				<div>Developed by {props.game.developer}</div>

				<div>${props.game.price}</div>
				<p>{props.game.positive_ratings} positive ratings</p>
				<p>{props.game.negative_ratings} negative ratings</p>
			</div>
			<div className="gameRight">
				<AddButton
					addToCart={props.addToCart}
					cartItem={props.cartItem}
					game={props.game}
				/>
				{props.cartItem && props.cartItem.quantity > 0 ? (
					<RmvButton
						removeFromCart={props.removeFromCart}
						cartItem={props.cartItem}
						game={props.game}
					/>
				) : null}
			</div>
		</div>
	);
}
