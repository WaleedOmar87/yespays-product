export function ShippingInformation({ shippingType, shippingInformation }) {
	return shippingType == "local" ? (
		<span className="shipping-container center">
			<span>
				<b>Pick From</b>: {shippingInformation.from}
			</span>
		</span>
	) : (
		<span className="shipping-container">
			<span>
				<b>From</b>
				{shippingInformation.from}
			</span>
			<span>
				<b>To</b>
				{shippingInformation.to}
			</span>
			<span>
				<b>In</b>
				{shippingInformation.duration}
			</span>
		</span>
	);
}
