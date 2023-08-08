import React, { Component } from "react";
import Menu from "../Menu";

class NotFound extends Component {
	state = {};
	render() {
		return (
			<div>
				<Menu colr="product-MenuContainer" />
				<h1>Not Found</h1>
			</div>
		);
	}
}

export default NotFound;
