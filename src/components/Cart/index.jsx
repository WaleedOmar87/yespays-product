export function Cart() {
	const cartTotal = 0;
	return (
		<div className="cart-container">
			<h2 className="cart-title">My Cart </h2>
			<h4 className="cart-summery">Cart Summery</h4>
			<div className="cart-items"></div>
			<div className="cart-total">Total: {cartTotal}</div>
			<div className="cart-buttons">
				<div className="purchase-buttons">
					<a href="#" className="button button-secondary review-cart">
						Review Cart
					</a>
					<a href="#" className="button button-primary checkout">
						Complete Checkout
					</a>
				</div>
			</div>
		</div>
	);
}
