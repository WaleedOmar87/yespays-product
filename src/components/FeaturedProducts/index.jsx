import { useFeaturedProducts } from "@main/hooks";
import { FeaturedProduct } from "./common/FeaturedProduct";
import "./FeaturedProducts.style.scss";

export function FeaturedProducts() {
	const { featuredProducts } = useFeaturedProducts();
	return (
		<div className="container">
			<div className="row">
				<div className="col-12">
					<div className="featured-products-container">
						<div className="row">
							{featuredProducts &&
								featuredProducts.length &&
								featuredProducts.map((product, index) => {
									return (
										<FeaturedProduct
											key={index}
											productDetails={product}
										/>
									);
								})}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
