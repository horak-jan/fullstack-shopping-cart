export const FETCH_GAMES_PENDING = "FETCH_GAMES_PENDING";
export const FETCH_GAMES_SUCCESS = "FETCH_GAMES_SUCCESS";
export const FETCH_GAMES_ERROR = "FETCH_GAMES_ERROR";
export const FILTER_GAMES_BY_PLATFORM = "FILTER_GAMES_BY_PLATFORM";

export function fetchGamesPending() {
	return {
		type: FETCH_GAMES_PENDING
	};
}

export function fetchGamesSuccess(games) {
	return {
		type: FETCH_GAMES_SUCCESS,
		payload: games
	};
}

export function fetchGamesError(error) {
	return {
		type: FETCH_GAMES_ERROR,
		error: error
	};
}

export const filterGames = (games, platform) => dispatch => {
	return dispatch({
		type: FILTER_GAMES_BY_PLATFORM,
		payload: {
			platform: platform,
			games: {
				games:
					platform === ""
						? games
						: games.filter(a => a.platform.indexOf(platform.toLowerCase()) >= 0)
			}
		}
	});
};

function fetchGames() {
	return dispatch => {
		dispatch(fetchGamesPending());
		fetch("http://localhost:3000/game")
			.then(res => res.json())
			.then(data => {
				if (data.error) {
					throw data.error;
				}
				dispatch(fetchGamesSuccess(data));
				return data;
			})
			.catch(error => {
				dispatch(fetchGamesError(error));
			});
	};
}

export default fetchGames;
