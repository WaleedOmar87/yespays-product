export function SecondaryFooter() {
	return (
		<div className="secondary-footer">
			<div className="copyrights">
				© 2021 yeshtery, all rights reserved.
			</div>
			<div className="payment-methods">
				<ul>
					<li>
						<img
							src="/public/cash-on-delivery.png"
							alt="Cash On Delivery"
						/>
					</li>
					<li>
						<img src="/public/visa.png" alt="Visa" />
					</li>
					<li>
						<img src="/public/mastercard.png" alt="Mastercard" />
					</li>
				</ul>
			</div>
			<div className="powered-by">
				<span>Powered By</span>
				<a href="#">
					<img src="/public/nasnav.png" alt="Powered By Nasnav" />
				</a>
			</div>
		</div>
	);
}
