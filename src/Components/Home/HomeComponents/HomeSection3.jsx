import React, { Component } from "react";
import { Link } from "react-router-dom";
import http from "../../../httpServices";

class HomeSection3 extends Component {
	state = {};
	componentDidMount() {
		http.get("/products").then(({ data }) => this.setState({ data }));
	}
	exclusive() {
		if (!this.state.data) return;
		let exclusive = this.state.data.filter((i) => i.exclusive);
		return exclusive;
	}
	render() {
		let exclusive = this.exclusive();
		return (
			<div className="homeSection3-Container">
				{this.state.data && (
					<div className="homeSection3-InnerContainer">
						<Link to={`/Products-details/${exclusive[0].itemName}`}>
							<img
								style={{ width: "100%" }}
								src={
									require(`../../../images/${exclusive[0].image[0]}`).default
								}
								alt=""
							/>
						</Link>

						<div>
							<p>Exclusively available in this shop</p>
							<Link
								style={{ textDecoration: "none", color: "black" }}
								to={`/Products-details/${exclusive[0].itemName}`}
							>
								<h1>{exclusive[0].itemName}</h1>
							</Link>
							<h2>{exclusive[0].productDetail}</h2>
							<Link to={`/Products-details/${exclusive[0].itemName}`}>
								<button className="btn-homeSection1 buy">
									Buy Now<i className="bi bi-arrow-right"></i>
								</button>
							</Link>
						</div>
					</div>
				)}
			</div>
		);
	}
}

export default HomeSection3;
