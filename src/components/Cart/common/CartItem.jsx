export function CartItem({ product }) {
	return (
		<div className="cart-item">
			<div className="product-image">
				<img
					src={product.product_images[0].thumbnail}
					alt={product.title}
				/>
			</div>
			<div className="product-details">
				<h4 className="title">{product.slug}</h4>
				<span className="quantity">Quantity: 1</span>
				<div className="product-meta">
					<span className="price">
						{product.price_discounted}
						<span className="currency">{product.currency}</span>
					</span>
					<button className="button x-small primary">Remove</button>
				</div>
			</div>
		</div>
	);
}
