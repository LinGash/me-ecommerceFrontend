import React, { Component } from "react";

class Footer extends Component {
	state = {};
	render() {
		return (
			<div className="footer-Container">
				<div className="footer-FirstContainer">
					<h1>Download Our App</h1>
					<p>Download App For Android and ios mobile phones</p>
					<div className="storeImage-Container">
						<img src={require("../images/play-store.png").default} alt="" />
						<img src={require("../images/app-store.png").default} alt="" />
					</div>
				</div>
				<div className="footer-SecondContainer">
					<img src={require("../images/logo.png").default} alt="" />
					<p>
						Our purpose is to substantially make the Pleasure And Benefits of
						Sports Accessible to the Many
					</p>
				</div>
				<div>
					<h1>Useful Links</h1>
					<h2 className="link-Text">Coupons</h2>
					<h2 className="link-Text">Blog Post</h2>
					<h2 className="link-Text">Return Policy</h2>
					<h2 className="link-Text">Join Affiliate</h2>
				</div>
				<div>
					<h1>Follow Us</h1>
					<h2 className="link-Text">Facebook</h2>
					<h2 className="link-Text">Twitter</h2>
					<h2 className="link-Text">Instagram</h2>
					<h2 className="link-Text">You Tube</h2>
				</div>
			</div>
		);
	}
}

export default Footer;
