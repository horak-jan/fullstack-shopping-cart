import {
	FETCH_MEDIA_PENDING,
	FETCH_MEDIA_SUCCESS,
	FETCH_MEDIA_ERROR
} from "../actions/mediaActions";

const initialState = {
	pending: false,
	media: [],
	error: null
};

export default function mediaReducer(state = initialState, action) {
	switch (action.type) {
		case FETCH_MEDIA_PENDING:
			return {
				...state,
				pending: true
			};
		case FETCH_MEDIA_SUCCESS:
			return {
				...state,
				pending: false,
				media: action.payload
			};
		case FETCH_MEDIA_ERROR:
			return {
				...state,
				pending: false,
				error: action.error
			};
		default:
			return state;
	}
}

export const getMedia = state => state.media;
export const getMediaPending = state => state.pending;
export const getMediaError = state => state.error;
