const cartWithoutItem = (cart, item) =>
	cart.filter(cartItem => cartItem.appid !== item.appid);

const itemInCart = (cart, item) =>
	cart.filter(cartItem => cartItem.appid === item.appid)[0];

const addToCart = (cart, item) => {
	const cartItem = itemInCart(cart, item);
	return cartItem === undefined
		? [...cartWithoutItem(cart, item), { ...item, quantity: 1 }]
		: [
				...cartWithoutItem(cart, item),
				{ ...cartItem, quantity: cartItem.quantity + 1 }
		  ];
};

const removeFromCart = (cart, item) => {
	const cartItem = itemInCart(cart, item);

	return item.quantity === 1
		? [...cartWithoutItem(cart, item)]
		: [
				...cartWithoutItem(cart, item),
				{ ...cartItem, quantity: cartItem.quantity - 1 }
		  ];
};

const removeAllFromCart = (cart, item) => {
	return [...cartWithoutItem(cart, item)];
};

const cartReducer = (state = [], action) => {
	switch (action.type) {
		case "ADD":
			return addToCart(state, action.payload);
		case "REMOVE":
			return removeFromCart(state, action.payload);
		case "REMOVE_ALL":
			return removeAllFromCart(state, action.payload);

		default:
			return state;
	}
};

export default cartReducer;
