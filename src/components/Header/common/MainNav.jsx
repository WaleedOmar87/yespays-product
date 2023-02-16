import React, { useContext } from "react";
import { AppContext } from "@main/store";
import { SearchForm } from "@main/components/Form";
import { useProduct } from "@main/hooks";
export function MainNavigation() {
	const { productDetails, dispatchAction } = useProduct();
	const { cartItems } = useContext(AppContext);
	const onToggleCart = () => {
		dispatchAction("cartStatus", true);
	};
	return (
		<div className="main-navigation">
			<div className="container">
				<div className="row">
					<div className="col-12 section-container">
						<div className="left-section">
							<SearchForm />
						</div>
						<div className="center-section">
							<div className="brand-logo">
								<img
									src={productDetails.brand_logo}
									alt={productDetails.brand_name}
								/>
							</div>
						</div>
						<div className="right-section">
							<div className="cart-list">
								<ul className="list">
									<li>
										<a
											onClick={onToggleCart}
											href="#"
											className="cart"
										>
											<div className="cart-icon">
												<img
													src="/public/cart-total-icon.svg"
													alt="Cart Total"
												/>
												<span className="cart-total">
													{cartItems
														? cartItems.length
														: 0}
												</span>
											</div>
											<span className="text">Cart</span>
										</a>
									</li>
									<li>
										<a href="#" className="wishlist">
											<img
												src="/public/heart.svg"
												alt="Wishlist"
											/>
											<span className="text">
												Wishlist
											</span>
										</a>
									</li>
									<li>
										<a href="#" className="login">
											<img
												src="/public/user-icon.svg"
												alt="Login"
											/>
											<span className="text">Login</span>
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
