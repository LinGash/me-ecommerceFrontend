import React, { Component } from "react";
import Menu from "../Menu";
import ContactSection1 from "./ContactComponents/ContactSection1";

class Contact extends Component {
	state = {};
	render() {
		return (
			<div>
				<Menu colr="menuContainer contact-MenuContainer" />
				<ContactSection1 />
			</div>
		);
	}
}

export default Contact;
