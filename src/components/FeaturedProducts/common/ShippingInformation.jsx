export function ShippingInformation({ shippingType, shippingInformation }) {
	return shippingType == "local" ? (
		<span>
			<b>Pick From</b>: {shippingInformation.from}
		</span>
	) : (
		<span>
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
