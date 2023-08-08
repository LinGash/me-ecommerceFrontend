import React, { Component } from "react";
import { Link } from "react-router-dom";
import http from "../../../httpServices";
import Loading from "../../../loading";

class HomeSection2 extends Component {
	state = {
		data: [],
		loading: true,
	};
	componentDidMount() {
		http.get("/products").then(({ data }) => {
			this.setState({ loading: false });
			this.setState({ data });
		});
	}

	sortDate() {
		const copy = [...this.state.data];
		const arr = copy.sort(function (a, b) {
			let one = new Date(a.release);
			let two = new Date(b.release);
			return two - one;
		});
		const sortArr = arr.slice(0, 4);
		return sortArr;
	}
	feature() {
		const copy = [...this.state.data];
		let feature = copy.filter((i) => {
			return i.fav;
		});
		return feature;
	}
	featureLoader = `text-align: center;
				display: block;
				height: 10rem;
				padding-top: 2rem;
				padding-bottom: 5rem;
		        `;
	latestLoader = `text-align: center;
				display: block;
				height: 1rem;
				padding-top: 3rem;
		        `;
	render() {
		let feature = this.feature();
		let sortArr = this.sortDate();
		return (
			<div className="homeSection2-Container">
				<Loading loading={this.state.loading} css={this.featureLoader} />
				<div className="homeSection2-featureImageContainer">
					{feature.map((i) => {
						return (
							<Link key={i.itemName} to={`Products-details/${i.itemName}`}>
								<img
									className="homeSection2-featureImage"
									src={require(`../../../images/${i.image}`).default}
									alt=""
								/>
							</Link>
						);
					})}
				</div>
				<div className="homeSection2-FeatureTextContainer">
					<h1>Featured Products</h1>
					<hr />
				</div>
				<Loading loading={this.state.loading} css={this.latestLoader} />
				<div className="homeSection2-latestImageContainer">
					{sortArr.map((p) => {
						return (
							<div
								key={p.itemName}
								className="homeSection2-latestEachContainer"
							>
								<div>
									<Link to={`/Products-details/${p.itemName}`}>
										<img
											className="homeSection2-latestImage"
											src={require(`../../../images/${p.image}`).default}
											alt=""
										/>
									</Link>
								</div>
								<div className="homeSection2-latestImageBelow">
									<h1>Ks {p.money}</h1>
									<Link
										style={{ textDecoration: "none" }}
										to={`/Products-details/${p.itemName}`}
									>
										<p>{p.itemName}</p>
									</Link>
								</div>
							</div>
						);
					})}
				</div>
				<div className="homeSection2-LatestTextContainer">
					<h1 style={{ textAlign: "center" }}>Latest Products</h1>
					<hr />
				</div>
			</div>
		);
	}
}

export default HomeSection2;
