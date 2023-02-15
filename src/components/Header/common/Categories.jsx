import React from "react";
import { usePageContent } from "@main/hooks";

export function Categories() {
	const { pageContent } = usePageContent();
	let { categories } = pageContent;

	return (
		<div className="categories-navigation">
			<div className="container">
				<div className="col-12">
					{categories &&
						categories.length &&
						categories.map((category, index) => {
							return (
								<a href={category.url} key={index}>
									{category.title}
								</a>
							);
						})}
				</div>
			</div>
		</div>
	);
}
