import React from "react";
import { useProduct } from "@main/hooks";
import { QuantityInput } from "@main/components/Form/common/Input";

export function ProductInfo() {
	const { productDetails, dispatchAction } = useProduct();
	const onChangeSize = (event) => {
		let newSize = event.target.name;
	};
	const onChangeQuantity = (event) => {};
	const onChangeColor = (event) => {};
	const onAddToCart = (event) => {};
	return (
		<div className="product-information">
			<div className="product-brand">
				<a href="#">
					<img
						src={productDetails.brand_logo}
						alt={productDetails.brand_name}
						width={60}
					/>
				</a>
			</div>
			<div className="product-title">
				<h2>{productDetails.title}</h2>
			</div>
			<div className="product-meta">
				<span className="category">{productDetails.category}</span>
				<span className="rating">
					<div className="rating-start"></div>
					<div className="rating-total">
						{productDetails.rating} of 5
					</div>
					<div className="rating-count">
						{productDetails.rating_count} Rates
					</div>
				</span>
			</div>
			<div className="product-meta">
				<span className="meta-title">Size</span>
				<div className="size-selector">
					{(() => {
						return (
							productDetails.sizes &&
							Object.keys(productDetails.sizes).map(
								(size, index) => {
									return (
										<button
											key={index}
											name={size}
											onClick={onChangeSize}
										>
											{size}
										</button>
									);
								}
							)
						);
					})()}
				</div>
			</div>
			<div className="product-meta">
				<span className="meta-title">Color</span>
				<div className="color-selector">
					{productDetails.colors &&
						productDetails.colors.map((color, index) => {
							return (
								<button
									name={color.color_name}
									key={index}
									onClick={onChangeColor}
								>
									<img
										src={color.color_image}
										alt={color.color_name}
									/>
								</button>
							);
						})}
				</div>
			</div>
			<div className="product-meta">
				<span className="meta-title">Quantity</span>
				<div className="quantity-selector">
					<QuantityInput
						min={1}
						max={productDetails.available_stock}
					/>
				</div>
			</div>
			<div className="product-meta">
				<div className="purchase-buttons">
					<button
						onClick={onAddToCart}
						className="button purchase-button add-to-cart"
						name="addToCart"
					>
						Add To Cart
					</button>
					<a
						href="#"
						className="button purchase-button pick-from-store"
					>
						Pick From Store
					</a>
				</div>
			</div>
		</div>
	);
}
