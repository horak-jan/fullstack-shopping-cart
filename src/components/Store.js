import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import fetchGamesAction from "../actions/gameActions";
import fetchMediaAction from "../actions/mediaActions";
import fetchAboutAction from "../actions/aboutActions";
import {
	getGamesError,
	getGames,
	getGamesPending
} from "../reducers/gameReducer";
import { getMedia } from "../reducers/mediaReducer";

import GameListing from "../features/gameListing";

class Store extends Component {
	componentDidMount() {
		const { fetchGames } = this.props;
		const { fetchMedia } = this.props;
		const { fetchAbout } = this.props;
		fetchGames();
		fetchMedia();
		fetchAbout();
	}

	render() {
		const { games, media } = this.props;

		return (
			<div className="wrapper">
				<div className="store">
					<h2>Welcome to the Store</h2>
					<GameListing games={games} media={media} />
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	error: getGamesError(state),
	games: getGames(state.games),
	pending: getGamesPending(state),
	media: getMedia(state.media)
});

const mapDispatchToProps = dispatch =>
	bindActionCreators(
		{
			fetchGames: fetchGamesAction,
			fetchMedia: fetchMediaAction,
			fetchAbout: fetchAboutAction
		},
		dispatch
	);

export default connect(mapStateToProps, mapDispatchToProps)(Store);
