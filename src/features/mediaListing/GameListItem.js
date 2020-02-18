import React from "react";

export default function GameListItem(props) {
	return (
		<div className="gameListItem">
			<div className="dev">
				<h3>{props.game.name}</h3>
				<div>{props.game.developer}</div>
				<div>{props.game.price}</div>
			</div>
			{/* <img height={100} title={props.name} src={`${image}`} /> */}
			<p>{props.game.positive_ratings}</p>
			<button>add to cart</button>
		</div>
	);
}
