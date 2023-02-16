import React, { useContext } from "react";
import { useProduct } from "@main/hooks";
import { AppContext } from "@main/store";
import { updateCart } from "@main/utils";
import { QuantityInput } from "@main/components/Form/common/Input";
import { Rating } from "react-simple-star-rating";

export function ProductInfo() {
	const { productDetails } = useProduct();
	const { selectedProduct, cartItems, dispatchAction } =
		useContext(AppContext);
	const onChangeSize = (event) => {
		let newSize = event.target.name;
		dispatchAction("selectedProduct", {
			...selectedProduct,
			size: newSize,
		});
	};
	const onChangeColor = (event) => {
		dispatchAction("selectedProduct", {
			...selectedProduct,
			color: event.target.dataset.name,
		});
	};
	const onAddToCart = (event) => {
		dispatchAction("cartStatus", true);
		dispatchAction(
			"cartItems",
			updateCart(cartItems, productDetails, selectedProduct)
		);
	};
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
					<div className="rating-start">
						<Rating readonly initialValue={productDetails.rating} />
					</div>
					<div className="rating-total">
						{productDetails.rating} of 5
					</div>
					<div className="rating-count">
						{productDetails.rating_count} Rates
					</div>
				</span>
				<span className="price">
					<span className="price-discounted">
						{productDetails.price_discounted}
						<span className="currency">
							{productDetails.currency}
						</span>
					</span>
					<span className="price-original">
						{productDetails.price_original}
						<span className="currency">
							{productDetails.currency}
						</span>
					</span>
					<span className="discount-amount">
						{productDetails.discount_amount} Off
					</span>
				</span>
			</div>
			<div className="product-meta">
				<h3 className="meta-title">Size</h3>
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
											{productDetails.sizes[size]}
										</button>
									);
								}
							)
						);
					})()}
				</div>
			</div>
			<div className="product-meta">
				<h3 className="meta-title">Color</h3>
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
										name={color.color_name}
									/>
								</button>
							);
						})}
				</div>
			</div>
			<div className="product-meta quantity">
				<h3 className="meta-title">Quantity</h3>
				<div className="quantity-selector">
					<QuantityInput
						min={1}
						max={productDetails.available_stock}
					/>
				</div>
			</div>
			<div className="product-meta purchase">
				<div className="purchase-buttons">
					<button
						onClick={onAddToCart}
						className="button primary purchase-button add-to-cart"
						name="addToCart"
					>
						Add To Cart
					</button>
					<a
						href="#"
						className="button secondary purchase-button pick-from-store"
					>
						Pick From Store
					</a>
				</div>
			</div>
		</div>
	);
}
