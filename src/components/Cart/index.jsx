import { useContext } from "react";
import { AppContext } from "@main/store";
import { CartItem } from "./common/CartItem";
import "./Cart.style.scss";
export function Cart() {
	let { cartStatus, cartTotal, dispatchAction, cartItems } =
		useContext(AppContext);
	const onCloseCart = (event) => {
		dispatchAction("cartStatus", false);
	};
	return (
		<div className={`cart-sidebar ${!cartStatus && "hidden"}`}>
			<div className="cart-overlay"></div>
			<div className="cart-container">
				<button onClick={onCloseCart} className="close-cart">
					<img src="/public/close.svg" alt="Close Cart" />
				</button>
				<h2 className="cart-title">My Cart </h2>
				<h4 className="cart-summary">Cart Summery</h4>
				<div className="cart-items">
					{cartItems &&
						cartItems.length > 0 &&
						cartItems.map((item, index) => {
							return <CartItem product={item} key={index} />;
						})}
				</div>
				<div className="cart-total">Total: {cartTotal}</div>
				<div className="cart-buttons">
					<div className="purchase-buttons">
						<a
							href="#"
							className="button secondary small review-cart"
						>
							Review Cart
						</a>
						<a href="#" className="button primary small checkout">
							Complete Checkout
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
