import React from "react";
import { useProduct } from "@main/hooks";

export function Breadcrumb() {
	const { productDetails } = useProduct();
	let { breadcrumb } = productDetails;

	return (
		<div className="breadcrumb-navigation">
			<div className="container">
				<div className="col-12">
					{breadcrumb &&
						breadcrumb.length &&
						breadcrumb.map((item, index) => {
							return (
								<a href={item.url} key={index}>
									{item.title}
								</a>
							);
						})}
				</div>
			</div>
		</div>
	);
}
