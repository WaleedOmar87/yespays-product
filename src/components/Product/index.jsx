import React from "react";
import { ProductInfo } from "./common/ProductInfo";
import { ProductSlider } from "./common/ProductSlider";
import "./Product.style.scss";
export function Product() {
	return (
		<div className="product-container">
			<div className="container">
				<div className="row">
					<div className="col-md-6 col-12">
						<ProductSlider />
					</div>
					<div className="col-md-6 col-12">
						<ProductInfo />
					</div>
				</div>
			</div>
		</div>
	);
}
