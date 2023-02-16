import React, { useContext } from "react";
import { AppContext } from "@main/store";
import "@main/components/Form/Form.style.scss";

export function SearchInput() {
	return (
		<div className="input-container search-input">
			<span className="input-icon">
				<img src="/public/search-icon.svg" alt="Search" />
			</span>
			<input
				type="text"
				name="search"
				className="form-input"
				placeholder="Search"
			/>
		</div>
	);
}

export function SubscriberInput() {
	return (
		<div className="input-container subscribe-input">
			<input
				type="text"
				name="subscriber-email"
				className="form-input"
				placeholder="Enter Your Email"
			/>
			<button className="subscribe-button">
				<span>Subscribe</span>
				<img src="/public/paperplan-icon.svg" alt="Subscribe" />
			</button>
		</div>
	);
}

export function QuantityInput({ min, max }) {
	const { selectedProduct, dispatchAction } = useContext(AppContext);
	const updateProductQuantity = (event) => {
		let type = event.target.name;
		if (type == "increase") {
			dispatchAction("selectedProduct", {
				...selectedProduct,
				quantity: selectedProduct.quantity + 1,
			});
		}
		if (type == "decrease") {
			dispatchAction("selectedProduct", {
				...selectedProduct,
				quantity:
					selectedProduct.quantity > 1
						? selectedProduct.quantity - 1
						: 1,
			});
		}
	};

	return (
		<div className="input-container quantity-input">
			<button
				className="quantityDecrease"
				name="decrease"
				onClick={updateProductQuantity}
			>
				-
			</button>
			<input
				type="number"
				max={max}
				min={min}
				defaultValue={selectedProduct.quantity}
			/>
			<button
				className="quantityIncrease"
				name="increase"
				onClick={updateProductQuantity}
			>
				+
			</button>
		</div>
	);
}
