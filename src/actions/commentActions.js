export const FETCH_COMMENT_PENDING = "FETCH_COMMENT_PENDING";
export const FETCH_COMMENT_SUCCESS = "FETCH_COMMENT_SUCCESS";
export const FETCH_COMMENT_ERROR = "FETCH_COMMENT_ERROR";
export const ADD_COMMENT = "ADD_COMMENT";

export function fetchCommentPending() {
	return {
		type: FETCH_COMMENT_PENDING
	};
}

export function fetchCommentSuccess(comment) {
	return {
		type: FETCH_COMMENT_SUCCESS,
		payload: comment
	};
}

export function fetchCommentError(error) {
	return {
		type: FETCH_COMMENT_ERROR,
		error: error
	};
}

export function addComment(payload) {
	return {
		type: ADD_COMMENT,
		payload: payload
	};
}

export function submitComment(newsId, username, body) {
	var payload = {
		newsId: newsId,
		username: username,
		body: body
	};

	return dispatch => {
		dispatch(addComment(payload));

		fetch("http://localhost:3000/comment", {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
				"X-Requested-With": "XMLHttpRequest",
				credentials: "same-origin"
			},
			body: JSON.stringify({ newsId, username, body })
		})
			.then(res => {
				if (!res.ok) {
					throw Error(res.statusText);
				}
			})
			.catch(e => console.log(e));
	};
}

function fetchComments() {
	return dispatch => {
		dispatch(fetchCommentPending());
		fetch("http://localhost:3000/comment")
			.then(res => res.json())
			.then(data => {
				if (data.error) {
					throw data.error;
				}
				dispatch(fetchCommentSuccess(data));
				return data;
			})
			.catch(error => {
				dispatch(fetchCommentError(error));
			});
	};
}

export default fetchComments;
