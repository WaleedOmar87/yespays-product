/* Default State */
export const initialState = {
	cartItems: [],
	productDetails: {},
	selectedProduct: {
		quantity: 1,
		color: "",
		size: "",
	},
	wishListed: false,
	productQuantity: 0,
	loading: true,
	pageContent: {},
	featuredProducts: [],
};

/* Main App Reducer */
export const AppReducer = (state, action) => {
	const { type, payload } = action;
	return {
		...state,
		[type]: payload[type],
	};
};
