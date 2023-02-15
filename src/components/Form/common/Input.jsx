import React, { useContext } from "react";
import { AppContext } from "@main/store";

export function SearchInput() {
	return (
		<div className="input-container">
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
		<div className="input-container">
			<input
				type="text"
				name="subscriber-email"
				className="form-input"
				placeholder="Enter Your Email"
			/>
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
			<input
				type="number"
				max={max}
				min={min}
				defaultValue={selectedProduct.quantity}
			/>
			<button
				className="quantityDecrease"
				name="decrease"
				onClick={updateProductQuantity}
			>
				-
			</button>
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
