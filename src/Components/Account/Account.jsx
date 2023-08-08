import React, { Component } from "react";
import Menu from "../Menu";
import AccountSecion1 from "./AccountComponents/AccountSection1";
class Account extends Component {
	state = {};
	render() {
		return (
			<div className="Account-Container">
				<Menu colr="menuContainer account-MenuContainer" />
				<AccountSecion1 />
			</div>
		);
	}
}

export default Account;
