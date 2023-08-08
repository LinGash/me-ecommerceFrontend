import React, { Component } from "react";
import { Link } from "react-router-dom";
import Menu from "../../Menu.jsx";
import http from "../../../httpServices.js";

class PurchaseCard extends Component {
	state = {
		item: [],
		buy: false,
		buyNext: false,
		successfullyOrdered: false,
		phAndAddress: {
			ph: "",
			address: "",
		},
	};

	componentDidMount() {
		window.scrollTo(0, 0);
		if (!JSON.parse(localStorage.getItem("item"))) {
			localStorage.setItem("item", JSON.stringify([]));
		}
		let inside = JSON.parse(localStorage.getItem("item"));
		let arr = [];
		if (this.props.location.state) {
			let { productinput, item } = this.props.location.state;

			arr.push({
				size: productinput.size,
				count: productinput.count,
				itemName: item[0].itemName,
				money: item[0].money,
				image: item[0].image[0],
			});
			let filtered = inside.filter(
				(i) => i.itemName === this.props.location.state.item[0].itemName
			);

			if (filtered[0]) {
				let index = inside.indexOf(filtered[0]);

				inside[index] = { ...arr[0] };
			}

			let arrpushed = filtered[0] ? [...inside] : [...inside, ...arr];

			localStorage.setItem("item", JSON.stringify(arrpushed));

			this.setState({ item: arrpushed });
		}
		if (!this.props.location.state) {
			this.setState({ item: inside });
		}
	}
	handleRemove = (itemName) => {
		let newArr = this.state.item.filter((i) => i.itemName !== itemName);
		localStorage.setItem("item", JSON.stringify(newArr));
		this.setState({ item: newArr });
	};
	CalculateTotal(count, money) {
		return count * money + "  " + "Kyat";
	}
	Combine() {
		let combine = 0;
		for (let i of this.state.item) {
			combine += i.count * i.money;
		}
		return combine;
	}
	tax() {
		let tax = this.Combine() * (1.5 / 100);
		return tax;
	}
	total() {
		return this.Combine() + this.tax();
	}
	handlePurchase = () => {
		const { phAndAddress } = this.state;
		const token = localStorage.getItem("token");
		const purchasedProducts = JSON.parse(localStorage.getItem("item"));
		http.post("/sendReceipt", {
			token,
			purchasedProducts,
			phAndAddress,
		});
		localStorage.setItem("item", JSON.stringify([]));
		this.setState({ successfullyOrdered: true, buyNext: false });
	};
	handlePhAndAddress = ({ currentTarget: input }) => {
		const obj = { [input.name]: input.value };
		const obj1 = { ...this.state.phAndAddress, ...obj };
		this.setState({ phAndAddress: obj1 });
	};
	render() {
		if (!JSON.parse(localStorage.getItem("item"))) {
			localStorage.setItem("item", JSON.stringify([]));
		}
		let buyDisable = JSON.parse(localStorage.getItem("item"));
		return (
			<div className="PurchaseCard">
				<Menu colr="menuContainer product-MenuContainer" />
				<div className="PurchaseCard-Container">
					<div style={{ position: "relative" }}>
						<div className="purchaseMenu">
							<h1>Product</h1>
							<h2>Count</h2>
							<h3>Cost</h3>
						</div>
						<div>
							<div className="PurchaseCardItem-Container">
								{!this.state.item[0] && (
									<div className="PurchaseCardItem-SectionContainer">
										<h1 style={{ textAlign: "start" }}>_</h1>
										<h1 style={{ textAlign: "center" }}>_</h1>
										<h1 style={{ textAlign: "end" }}>_</h1>
									</div>
								)}
								{this.state.item.map((i) => {
									return (
										<div
											key={i.itemName}
											className="PurchaseCardItem-SectionContainer"
										>
											<div className="PurchaseCardItem-RightContainer">
												<Link to={`/Products-details/${i.itemName}`}>
													<img
														src={require(`../../../images/${i.image}`).default}
														alt=""
													/>
												</Link>
												<div>
													<Link
														style={{ textDecoration: "none", color: "inherit" }}
														to={`/Products-details/${i.itemName}`}
													>
														<h1>{i.itemName}</h1>
													</Link>
													<h2>Price: {i.money}</h2>
													<h2>Size: {i.size}</h2>
													<Link
														to="/Products/Card"
														style={{ color: "black", textDecoration: "none" }}
													>
														<h5 onClick={() => this.handleRemove(i.itemName)}>
															remove
														</h5>
													</Link>
												</div>
											</div>
											<div className="PurchaseCard-countContainer">
												<h3>{i.count}</h3>
											</div>
											<h4> {this.CalculateTotal(i.count, i.money)}</h4>
										</div>
									);
								})}
							</div>
							<hr />
							<div className="PurchaseCard-TotalContainer">
								<h1>Combine</h1>
								<h2>{this.Combine()}</h2>
								<h3>Tax</h3>
								<h4>{this.tax()}</h4>
								<h5>Total</h5>
								<h6>{this.total()}</h6>
								<div className="purchaseBtn">
									<Link
										to="/Products/Card"
										style={{ color: "black", textDecoration: "none" }}
									>
										<button
											disabled={!buyDisable[0]}
											onClick={() => {
												const token = localStorage.getItem("token");
												if (!token) {
													window.location = "/Account";
													return;
												}
												this.setState({ buy: true });
											}}
										>
											Buy
										</button>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
				{this.state.buy && (
					<div className="float">
						<form action="">
							<>
								<h1>
									<i
										style={{ paddingRight: "1rem" }}
										class="fas fa-mobile-alt"
									></i>
									Phone Number
								</h1>
								<div className="editInputContainer">
									<input
										autoComplete="off"
										value={this.state.phAndAddress.ph}
										name="ph"
										onChange={this.handlePhAndAddress}
										style={{ backgroundColor: "#ccccbc" }}
										type="number"
									/>
								</div>
							</>
							<div className="formBtnContainer">
								<button
									onClick={(e) => {
										e.preventDefault();
										this.setState({ buy: false });
									}}
									className="ph-cancel"
								>
									Cancel
								</button>
								<button
									disabled={!this.state.phAndAddress.ph}
									onClick={(e) => {
										e.preventDefault();
										this.setState({ buyNext: true, buy: false });
									}}
									className="ph-next"
								>
									Next
								</button>
							</div>
						</form>
					</div>
				)}
				{this.state.buyNext && (
					<div className="float">
						<form action="">
							<>
								<h1>
									<i
										style={{ paddingRight: "1rem" }}
										class="fas fa-map-marker-alt"
									></i>
									Current Address
								</h1>
								<div className="editInputContainer">
									<input
										autoComplete="off"
										value={this.state.phAndAddress.address}
										name="address"
										onChange={this.handlePhAndAddress}
										style={{ backgroundColor: "#ccccbc" }}
										type="text"
									/>
								</div>
							</>
							<div className="formBtnContainer">
								<button
									onClick={(e) => {
										e.preventDefault();
										this.setState({ buy: true, buyNext: false });
									}}
									className="ph-cancel"
								>
									Back
								</button>
								<button
									disabled={!this.state.phAndAddress.address}
									onClick={this.handlePurchase}
									className="ph-next"
								>
									Order
								</button>
							</div>
						</form>
					</div>
				)}
				{this.state.successfullyOrdered && (
					<div className="float">
						<form action="">
							<>
								<h1>
									<i style={{ paddingRight: "1rem" }} class="fas fa-check"></i>
									Successfully Ordered
								</h1>
								<h1>
									<i
										style={{ paddingRight: "1rem" }}
										class="fas fa-envelope"
									></i>
									Sent receipt to your email
								</h1>
							</>
							<div
								style={{ justifyContent: "center" }}
								className="formBtnContainer"
							>
								<button
									onClick={(e) => {
										e.preventDefault();
										this.setState({ successfullyOrdered: false });
										window.location = "/Products/Card";
									}}
									className="ph-cancel"
								>
									Ok
								</button>
							</div>
						</form>
					</div>
				)}
			</div>
		);
	}
}

export default PurchaseCard;
