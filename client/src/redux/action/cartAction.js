export const addToCart = (item, quantity) => (dispatch, getState) => {
	var cartItems = {
		title: item.title,
		_id: item._id,
		imageUrl: item.imageUrl,
		category: item.category,
		quantity: Number(quantity),
	};
	if (cartItems.quantity > 5) {
		alert("Cant add more items than 5");
	} else if (cartItems.quantity < 1) {
		dispatch({ type: "DELETE_FROM_CART", payload: item });
	} else {
		dispatch({ type: "ADD_TO_CART", payload: cartItems });
		localStorage.setItem(
			"cartItems",
			JSON.stringify(getState().cartReducer.cartItems)
		);
	}
};

export const deleteFromCart = (item) => (dispatch, getState) => {
	dispatch({ type: "DELETE_FROM_CART", payload: item });
	const cartItems = getState().cartReducer.cartItems;
	localStorage.setItem("cartItems", JSON.stringify(cartItems));
};
