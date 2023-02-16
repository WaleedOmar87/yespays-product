import React, { useRef } from "react";
import { useProduct } from "@main/hooks";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

export function ProductSlider() {
	const { productDetails } = useProduct();
	let images = productDetails.product_images;
	const productImageRef = useRef();

	const onChangeImage = (event) => {
		// Disabled because not enough demo images with correct size were provided
		return;
		let { fullSize, alt } = event.target.dataset;
		if (fullSize && fullSize !== "") {
			productImageRef.current.src = fullSize;
			productImageRef.current.alt = alt;
		}
	};
	return (
		<div className="product-slider">
			<div className="product-image">
				<img
					src="./src/images/product-image.png"
					ref={productImageRef}
					alt=""
				/>
			</div>
			<div className="product-thumbnails">
				<div className="buttons">
					<button className="swiper-prev swiper-button">
						<img src="/public/swiper-left.svg" alt="Prev" />
					</button>
					<button className="swiper-next swiper-button">
						<img src="/public/swiper-left.svg" alt="Next" />
					</button>
				</div>
				<Swiper
					modules={[Navigation]}
					navigation={{
						nextEl: ".swiper-next",
						prevEl: ".swiper-prev",
					}}
					slidesPerView={4}
				>
					{images &&
						images.length &&
						images.map((image, index) => {
							return (
								<SwiperSlide className="slide" key={index}>
									<img
										onClick={onChangeImage}
										data-full-size={image.thumbnail}
										src={image.thumbnail}
										alt={image.alt_text}
									/>
								</SwiperSlide>
							);
						})}
				</Swiper>
			</div>
		</div>
	);
}
