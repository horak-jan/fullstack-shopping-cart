export const FETCH_ABOUT_PENDING = "FETCH_ABOUT_PENDING";
export const FETCH_ABOUT_SUCCESS = "FETCH_ABOUT_SUCCESS";
export const FETCH_ABOUT_ERROR = "FETCH_ABOUT_ERROR";

export function fetchAboutPending() {
	return {
		type: FETCH_ABOUT_PENDING
	};
}

export function fetchAboutSuccess(about) {
	return {
		type: FETCH_ABOUT_SUCCESS,
		payload: about
	};
}

export function fetchAboutError(error) {
	return {
		type: FETCH_ABOUT_ERROR,
		error: error
	};
}

function fetchAbout() {
	return dispatch => {
		dispatch(fetchAboutPending());
		fetch("http://localhost:3000/about")
			.then(res => res.json())
			.then(data => {
				if (data.error) {
					throw data.error;
				}
				dispatch(fetchAboutSuccess(data));
				return data;
			})
			.catch(error => {
				dispatch(fetchAboutError(error));
			});
	};
}

export default fetchAbout;
