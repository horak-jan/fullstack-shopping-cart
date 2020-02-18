export const FETCH_NEWS_PENDING = "FETCH_NEWS_PENDING";
export const FETCH_NEWS_SUCCESS = "FETCH_NEWS_SUCCESS";
export const FETCH_NEWS_ERROR = "FETCH_NEWS_ERROR";

export function fetchNewsPending() {
	return {
		type: FETCH_NEWS_PENDING
	};
}

export function fetchNewsSuccess(news) {
	return {
		type: FETCH_NEWS_SUCCESS,
		payload: news
	};
}

export function fetchNewsError(error) {
	return {
		type: FETCH_NEWS_ERROR,
		error: error
	};
}

function fetchNews() {
	return dispatch => {
		dispatch(fetchNewsPending());
		fetch("http://localhost:3000/news")
			.then(res => res.json())
			.then(data => {
				if (data.error) {
					throw data.error;
				}
				dispatch(fetchNewsSuccess(data));
				return data;
			})
			.catch(error => {
				dispatch(fetchNewsError(error));
			});
	};
}

export default fetchNews;
