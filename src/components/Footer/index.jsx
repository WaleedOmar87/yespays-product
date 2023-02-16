import { SubscriberInput } from "@main/components/Form/common/Input";
import { SecondaryFooter } from "./common/SecondaryFooter";
import { FooterMenuWidget, FooterSocialWidget } from "./common/Widgets";
import "./Footer.style.scss";
export function Footer() {
	return (
		<footer className="main-footer">
			<div className="container">
				<div className="row">
					<div className="col-md-6 col-12 main-col">
						<div className="footer-logo">
							<a href="#">
								<img
									src="/public/footer-logo.png"
									alt="Yeshtery"
								/>
							</a>
						</div>
						<div className="about-us">
							<p>
								Lorem ipsum dolor sit amet, consectetuer
								adipiscing elit, sed diam nonummy nibh euismod
								tincidunt ut laoreet dolore magna aliquam erat
								volutpat.
								<br />
								<br />
								Ut wisi enim ad minim veniam, quis nostrud
								exerci tation ullamcorper suscipit lobortis nisl
								ut aliquip ex ea commodo consequat. Duis autem
								vel eum iriure dolor in hendrerit in vulputate
								velit esse molestie consequat, vel illum dolore
								eu feugiat nulla. Lorem ipsum dolor sit amet,
								consectetuer adipiscing elit, sed dia m nonummy
								nibh euismod tincidunt ut laoreet dolore magna
								aliquam erat volutpat. Ut wisi enim ad minim
								veniam, quis nostrud exerci tation ullamcorper
								suscipit lobortis nisl ut aliquip ex ea commodo
								consequat.
								<br />
								<br />
								Duis autem vel eum iriure dolor in hendrerit in
								vulputate velit esse molestie consequat, vel
								illum dolore eu feugiat nulla facilisis at vero
								eros et accumsan et iusto odio dignissim qui
								blandit
							</p>
						</div>
					</div>
					<div className="col-md-6 col-12 main-col">
						<h4 className="subscribe-title">
							Subscriber To Our Newsletter
						</h4>
						<SubscriberInput />
						<div className="row">
							<div className="col-md-6 col-12">
								<FooterMenuWidget />
							</div>
							<div className="col-md-6 col-12">
								<FooterSocialWidget />
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-12">
						<SecondaryFooter />
					</div>
				</div>
			</div>
		</footer>
	);
}
