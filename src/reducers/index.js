import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import authReducer from "./authReducer";
import gameReducer from "./gameReducer";
import newsReducer from "./newsReducer";
import aboutReducer from "./aboutReducer";
import mediaReducer from "./mediaReducer";
import commentReducer from "./commentReducer";
import orderReducer from "./orderReducer";
import cartReducer from "./cartReducer";
import { reducer as formReducer } from "redux-form";

export default combineReducers({
	errors: errorReducer,
	auth: authReducer,
	games: gameReducer,
	news: newsReducer,
	about: aboutReducer,
	comments: commentReducer,
	order: orderReducer,
	media: mediaReducer,
	cart: cartReducer,
	form: formReducer
});
