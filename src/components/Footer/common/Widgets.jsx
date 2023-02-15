import { usePageContent } from "@main/hooks";
export function FooterMenuWidget() {
	const { pageContent } = usePageContent();
	let menuItems = pageContent.footer_menu;
	return (
		<div className="footer-menu">
			<ul>
				{menuItems &&
					menuItems.length &&
					menuItems.map((item, index) => {
						return (
							<li key={index}>
								<a href={item.url}>{item.title}</a>
							</li>
						);
					})}
			</ul>
		</div>
	);
}

export function FooterSocialWidget() {
	const socialMedia = ["facebook", "twitter", "linkedin", "instagram"];
	return (
		<div className="footer-social-urls">
			<ul className="social-urls">
				{socialMedia.map((item, index) => {
					return (
						<li key={index}>
							<a href="#">
								<img src={`/public/${item}.svg`} alt={item} />
								<span className="text">/YESHTERY</span>
							</a>
						</li>
					);
				})}
			</ul>
		</div>
	);
}
