export function updateCart(cartItems, productDetails, selectedProduct) {
	let { id, title, slug, product_images, price_discounted, currency } =
		productDetails;
	let { color, quantity, size } = selectedProduct;
	const productToAdd = {
		id,
		title,
		slug,
		product_images,
		price_discounted,
		currency,
		color,
		quantity,
		size,
	};
	let updatedCart = cartItems.length
		? [...cartItems, productToAdd]
		: [productToAdd];
	return updatedCart;
}
