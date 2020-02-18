import React from "react";

import GameListItem from "./GameListItem";

export default function GameListing(props) {
	return (
		<div>
			{props.games.map(game => (
				<GameListItem game={game} key={game._id} />
			))}
		</div>
	);
}
