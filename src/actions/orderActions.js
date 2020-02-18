export const FETCH_ORDER_PENDING = "FETCH_ORDER_PENDING";
export const FETCH_ORDER_SUCCESS = "FETCH_ORDER_SUCCESS";
export const FETCH_ORDER_ERROR = "FETCH_ORDER_ERROR";

export function fetchOrderPending() {
	return {
		type: FETCH_ORDER_PENDING
	};
}

export function fetchOrderSuccess(order) {
	return {
		type: FETCH_ORDER_SUCCESS,
		payload: order
	};
}

export function fetchOrderError(error) {
	return {
		type: FETCH_ORDER_ERROR,
		error: error
	};
}

// import {
// 	fetchOrdersPending,
// 	fetchOrdersSuccess,
// 	fetchOrdersError
// } from "../actions/orderActions";

// function fetchOrders() {
// 	return dispatch => {
// 		dispatch(fetchOrdersPending());
// 		fetch("http://localhost:3000/order")
// 			.then(res => res.json())
// 			.then(data => {
// 				if (data.error) {
// 					throw data.error;
// 				}
// 				dispatch(fetchOrdersSuccess(data));
// 				return data;
// 			})
// 			.catch(error => {
// 				dispatch(fetchOrdersError(error));
// 			});
// 	};
// }

// export default fetchOrders;
