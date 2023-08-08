import React, { Component } from "react";
import Menu from "../Menu";
import ProductSection1 from "./ProductComponents/ProductSection1";
import axios from "axios";

class Products extends Component {
	state = {};
	
	render() {
		return (
			<div>
				<Menu colr="menuContainer product-MenuContainer" />
				<div className="productSection">
					<ProductSection1 />
				</div>
			</div>
		);
	}
}

export default Products;
