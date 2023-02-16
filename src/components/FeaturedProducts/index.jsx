import { useFeaturedProducts } from "@main/hooks";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper";
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
							<div className="col-12">
								<h2 className="featured-products-title">
									Similar Products
								</h2>
								<h4 className="featured-products-subtitle">
									You may like these products also
								</h4>
							</div>
						</div>
						<div className="row">
							<div className="col-12">
								<div className="featured-products">
									<Swiper
										spaceBetween={30}
										modules={[Scrollbar]}
										scrollbar={{ draggable: true }}
										slidesPerView={4}
									>
										{featuredProducts &&
											featuredProducts.length &&
											featuredProducts.map(
												(product, index) => {
													return (
														<SwiperSlide
															className="slide"
															key={index}
														>
															<FeaturedProduct
																key={index}
																productDetails={
																	product
																}
															/>
														</SwiperSlide>
													);
												}
											)}
									</Swiper>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
