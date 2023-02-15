import React from "react";
import { SearchInput, SubscriberInput } from "./common/Input";

export function SearchForm() {
	return (
		<form className="form-container search-form">
			<input type="hidden" name="csrf" value="csrf_example_value" />
			<SearchInput />
		</form>
	);
}

export function SubscriberForm() {
	return (
		<form className="form-container subscriber-form">
			<input type="hidden" name="csrf" value="csrf_example_value" />
			<SubscriberInput />
			<button className="subscriber-button accent-background">
				Subscriber
				<img src="/public/paperplan-icon.svg" alt="Subscriber" />
			</button>
		</form>
	);
}
