import React, { Component } from "react";
import { Link } from "react-router-dom";

class Menu extends Component {
	state = { clickedMenu: "" };
	handleClick = () => {
		let clicked = this.state.clicked ? false : true;
		this.setState({ clicked });
	};
	expandible() {
		let name = this.state.clicked ? "menuList expandible" : "menuList";
		return name;
	}
	render() {
		return (
			<div className={this.props.colr}>
				<Link to="/">
					<img
						className="menuLogo"
						src={require("../images/logo1.png").default}
						alt="logo"
					/>
				</Link>
				<div className="menuListIcon">
					<i onClick={this.handleClick} className="bi bi-list "></i>
				</div>
				<ul className={this.expandible()}>
					<li className="menuListItem ">
						<Link
							name="home"
							onClick={(e) => {
								let home = e.currentTarget.name;

								this.setState({ clickedMenu: home });
							}}
							className="menuLinkItem"
							to="/"
						>
							Home
						</Link>
					</li>
					<li className="menuListItem ">
						<Link
							name="product"
							onClick={(e) => {
								let product = e.currentTarget.name;
								this.setState({ clickedMenu: product });
							}}
							className="menuLinkItem"
							to="/Products"
						>
							Products
						</Link>
					</li>
					<li className="menuListItem ">
						<Link className="menuLinkItem" to="/About">
							About
						</Link>
					</li>
					<li className="menuListItem ">
						<Link className="menuLinkItem" to="/Contact">
							Contact
						</Link>
					</li>
					<li className="menuListItem account">
						<Link className="menuLinkItem" to="/Account">
							Account
						</Link>
					</li>
					<Link to="/Products/Card" style={{ color: "black" }}>
						<li className="menuBagIcon">
							<i className="bi bi-handbag"></i>
						</li>
					</Link>
				</ul>
			</div>
		);
	}
}

export default Menu;
