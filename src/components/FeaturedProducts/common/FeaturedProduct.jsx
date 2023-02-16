import { formatRating } from "@main/utils";
import { ShippingInformation } from "./ShippingInformation";
import { Rating } from "react-simple-star-rating";

export function FeaturedProduct({ productDetails }) {
	return (
		<div className="featured-product">
			<div className="product-inner">
				<div className="product-image">
					<img
						src={productDetails.image}
						alt={productDetails.title}
					/>
				</div>
				<h4 className="product-title">{productDetails.title}</h4>
				<div className="product-meta price-meta">
					<div className="product-price">
						<span className="price-discounted">
							{productDetails.price_discounted}
							<span className="currency">
								{productDetails.currency}
							</span>
						</span>
						<span className="price-original">
							<span className="price-original-text">
								{productDetails.price_original}
								{productDetails.currency}
							</span>
							<span className="discount-amount">
								{productDetails.discount_amount}
							</span>
						</span>
					</div>
					<div className="brand-logo">
						<img
							src={productDetails.brand_logo}
							alt={productDetails.title}
						/>
					</div>
				</div>
				<div className="product-rating">
					<span className="rating-start">
						<Rating readonly initialValue={productDetails.rating} />
					</span>
					<span className="rating-text">
						{productDetails.rating} of 5
					</span>
				</div>
				<div className="product-shipping">
					<ShippingInformation
						shippingType={productDetails.shipping_type}
						shippingInformation={
							productDetails.shipping_information
						}
					/>
				</div>
			</div>
		</div>
	);
}
