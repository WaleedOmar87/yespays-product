export function CartItem({ product }) {
	let { id, slug, product_images, quantity, price_discounted, currency } =
		product;
	return (
		<div className="cart-item" data-id={id}>
			<div className="product-image">
				<img src={product_images[0].thumbnail} alt={slug} />
			</div>
			<div className="product-details">
				<h4 className="title">{slug}</h4>
				<span className="quantity">Quantity: {quantity}</span>
				<div className="product-meta">
					<span className="price">
						{price_discounted}
						<span className="currency">{currency}</span>
					</span>
					<button className="button x-small primary">Remove</button>
				</div>
			</div>
		</div>
	);
}
