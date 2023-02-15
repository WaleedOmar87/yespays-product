import React from "react";
import { Flash } from "@main/components/Header/common/Flash";

export function SecondaryNavigation() {
	return (
		<div className="secondary-navigation">
			<div className="container">
				<div className="row">
					<div className="left-section">
						<button className="menu-icon">
							<img
								src="/public/menu-icon.svg"
								alt="Expand Menu"
							/>
						</button>
						<a href="logo">
							<img src="/public/yeshtery.svg" alt="Yeshtery" />
						</a>
					</div>
					<div className="center-section">
						<Flash />
					</div>
					<div className="right-section">
						<span className="contact-info">
							<ul className="list">
								<li>
									<img
										src="/public/phone-icon.svg"
										alt="Contact Us"
									/>
									<a href="#">Contact Us</a>
								</li>
								<li>
									<img
										src="/public/cart-icon.svg"
										alt="Track Order"
									/>
									<a href="#">Track Order</a>
								</li>
								<li>
									<img
										src="/public/location-icon.svg"
										alt="Find A Store"
									/>
									<a href="#">Find A Store</a>
								</li>
							</ul>
						</span>
					</div>
				</div>
			</div>
		</div>
	);
}
