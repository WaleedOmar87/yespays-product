/* Default State */
export const initialState = {
	cartItems: [],
	productDetails: {},
	selectedProduct: {},
	wishListed: false,
	productQuantity: 0,
	loading: true,
	pageContent: {},
	featuredProducts: [],
	cartOpen: false,
	cartTotal: 0,
};

/* Main App Reducer */
export const AppReducer = (state, action) => {
	const { type, payload } = action;
	return {
		...state,
		[type]: payload[type],
	};
};
