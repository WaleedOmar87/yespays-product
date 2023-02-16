import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { usePageContent } from "@main/hooks";
import "swiper/css";
export const Flash = () => {
	let { pageContent } = usePageContent();
	return (
		<div className="flash-container">
			<Swiper slidesPerView={1}>
				{pageContent.offers &&
					pageContent.offers.length &&
					pageContent.offers.map((message) => {
						return (
							<SwiperSlide key={message.id}>
								<a href={message.url}>{message.title}</a>
							</SwiperSlide>
						);
					})}
			</Swiper>
		</div>
	);
};
