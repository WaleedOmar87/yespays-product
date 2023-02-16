import React from "react";
import { useProduct } from "@main/hooks";

export function Breadcrumb() {
	const { productDetails } = useProduct();
	let { breadcrumb } = productDetails;

	return (
		<div className="breadcrumb-navigation">
			<div className="container">
				<div className="col-12 section-container">
					{breadcrumb &&
						breadcrumb.length &&
						breadcrumb.map((item, index) => {
							return (
								<a href={item.url} key={index}>
									<span className="url">{item.title}</span>
								</a>
							);
						})}
					{productDetails.slug}
				</div>
			</div>
		</div>
	);
}
