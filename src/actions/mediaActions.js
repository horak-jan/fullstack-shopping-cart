export const FETCH_MEDIA_PENDING = "FETCH_MEDIA_PENDING";
export const FETCH_MEDIA_SUCCESS = "FETCH_MEDIA_SUCCESS";
export const FETCH_MEDIA_ERROR = "FETCH_MEDIA_ERROR";

export function fetchMediaPending() {
	return {
		type: FETCH_MEDIA_PENDING
	};
}

export function fetchMediaSuccess(media) {
	return {
		type: FETCH_MEDIA_SUCCESS,
		payload: media
	};
}

export function fetchMediaError(error) {
	return {
		type: FETCH_MEDIA_ERROR,
		error: error
	};
}

function fetchMedia() {
	return dispatch => {
		dispatch(fetchMediaPending());
		fetch("http://localhost:3000/media")
			.then(res => res.json())
			.then(data => {
				if (data.error) {
					throw data.error;
				}
				dispatch(fetchMediaSuccess(data));
				return data;
			})
			.catch(error => {
				dispatch(fetchMediaError(error));
			});
	};
}

export default fetchMedia;
