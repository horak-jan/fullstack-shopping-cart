import {
	FETCH_ORDER_PENDING,
	FETCH_ORDER_SUCCESS,
	FETCH_ORDER_ERROR
} from "../actions/orderActions";

const initialState = {
	pending: false,
	order: [],
	error: null
};

export default function orderReducer(state = initialState, action) {
	switch (action.type) {
		case FETCH_ORDER_PENDING:
			return {
				...state,
				pending: true
			};
		case FETCH_ORDER_SUCCESS:
			return {
				...state,
				pending: false,
				order: action.payload
			};
		case FETCH_ORDER_ERROR:
			return {
				...state,
				pending: false,
				error: action.error
			};
		default:
			return state;
	}
}

export const getOrder = state => state.order;
export const getOrderPending = state => state.pending;
export const getOrderError = state => state.error;
