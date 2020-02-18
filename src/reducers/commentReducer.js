import {
	FETCH_COMMENT_PENDING,
	FETCH_COMMENT_SUCCESS,
	FETCH_COMMENT_ERROR,
	ADD_COMMENT
} from "../actions/commentActions";

const initialState = {
	pending: false,
	comment: [],
	error: null
};

export default function commentReducer(state = initialState, action) {
	switch (action.type) {
		case FETCH_COMMENT_PENDING:
			return {
				...state,
				pending: true
			};

		case FETCH_COMMENT_SUCCESS:
			return {
				...state,
				pending: false,
				comment: action.payload
			};
		case FETCH_COMMENT_ERROR:
			return {
				...state,
				pending: false,
				error: action.error
			};

		case ADD_COMMENT:
			return {
				...state,
				comment: state.comment.concat(action.payload)
			};

		default:
			return state;
	}
}

export const getComment = state => state.comment;
export const getCommentPending = state => state.pending;
export const getCommentError = state => state.error;
