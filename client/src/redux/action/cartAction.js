export const addToCart = (item, quantity) => (dispatch, getState) => {
	var cartItems = {
		title: item.title,
		_id: item._id,
		image: item.imageUrl,
		quantity: Number(quantity),
	};
	dispatch({ type: "ADD_TO_CART", payload: cartItems });
	localStorage.setItem(
		"cartItems",
		JSON.stringify(getState().cartReducer.cartItems)
	);
};
