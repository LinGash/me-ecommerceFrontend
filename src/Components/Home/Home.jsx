import React, { Component } from "react";
import Menu from "../Menu";
import HomeSection1 from "./HomeComponents/HomeSection1";
import HomeSection2 from "./HomeComponents/HomeSection2";
import HomeSection3 from "./HomeComponents/HomeSection3";
import HomeSection4 from "./HomeComponents/HomeSection4";

class Home extends Component {
	state = {};
	render() {
		return (
			<div>
				<Menu colr="menuContainer" />
				<div className="homeSection">
					<HomeSection1 />
					<HomeSection2 />
					<HomeSection3 />
					<HomeSection4 />
				</div>
			</div>
		);
	}
}

export default Home;
