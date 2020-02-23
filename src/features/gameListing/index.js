import React from "react";

import GameListItem from "./GameListItem";
import { connect } from "react-redux";
import InfiniteLoading from "react-simple-infinite-loading";

function GameListing(props, { fetchMore, hasMore }) {
	return (
		<div className="gameListing">
			<div className="gameListingMiddle">
				<InfiniteLoading
					hasMoreItems={hasMore}
					itemHeight={200}
					loadMoreItems={fetchMore}
					customScrollbar={true}
				>
					{props.games.map(game => (
						<GameListItem
							game={game}
							key={game._id}
							addToCart={props.addToCart}
							removeFromCart={props.removeFromCart}
							cartItem={
								props.cart.filter(cartItem => cartItem.appid === game.appid)[0]
							}
							media={
								props.media.media.filter(
									media => media.steam_appid === game.appid
								)[0]
							}
							about={
								props.about.about.filter(
									about => about.steam_appid === game.appid
								)[0]
							}
						/>
					))}
				</InfiniteLoading>
			</div>
		</div>
	);
}

function mapStateToProps(state) {
	return {
		cart: state.cart,
		media: state.media,
		about: state.about
	};
}

function mapDispatchToProps(dispatch) {
	return {
		addToCart: item => {
			dispatch({ type: "ADD", payload: item });
		},
		removeFromCart: item => {
			dispatch({ type: "REMOVE", payload: item });
		}
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(GameListing);
