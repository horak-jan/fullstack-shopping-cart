import {
	FETCH_ABOUT_PENDING,
	FETCH_ABOUT_SUCCESS,
	FETCH_ABOUT_ERROR
} from "../actions/aboutActions";

const initialState = {
	pending: false,
	about: [],
	error: null
};

export default function aboutReducer(state = initialState, action) {
	switch (action.type) {
		case FETCH_ABOUT_PENDING:
			return {
				...state,
				pending: true
			};
		case FETCH_ABOUT_SUCCESS:
			return {
				...state,
				pending: false,
				about: action.payload
			};
		case FETCH_ABOUT_ERROR:
			return {
				...state,
				pending: false,
				error: action.error
			};
		default:
			return state;
	}
}

export const getAbout = state => state.about;
export const getAboutPending = state => state.pending;
export const getAboutError = state => state.error;
