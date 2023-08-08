import React, { Component } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Loading from "../../../loading";
import http from "../../../httpServices";
import Menu from "../../Menu.jsx";

class ProductDetail extends Component {
	state = {
		products: [],
		image: "",
		productinput: { size: "small", count: "1" },
		loading: true,
	};
	componentDidMount() {
		window.scrollTo(0, 0);
		http.get("/products").then(({ data }) =>
			this.setState({ products: data, loading: false }, () => {
				const arr = this.filter();
				window.scrollTo(0, 0);
				this.setState({ image: arr[0].image[0] });
			})
		);
	}

	filter() {
		let filtered = this.state.products.filter((p) => {
			return p.itemName === this.props.match.params.id;
		});
		return filtered;
	}
	handleClick(i) {
		this.setState({ image: i });
	}
	RelatedProduct() {
		let p = this.filter();
		let relatedProduct = this.state.products.filter((product) => {
			return product.type.toLowerCase() === p[0].type.toLowerCase();
		});
		let arr = relatedProduct.filter((product) => {
			return product.itemName !== p[0].itemName;
		});
		let slc = arr.slice(0, 8);
		return slc;
	}
	handleChange = ({ currentTarget: input }) => {
		if (input.name === "size") {
			const productinput = { ...this.state.productinput };
			const productinput1 = { size: input.value };
			const combine = { ...productinput, ...productinput1 };
			this.setState({ productinput: combine });
		}

		if (input.name === "count") {
			const productinput = { ...this.state.productinput };
			const productinput1 = { count: input.value };
			const combine = { ...productinput, ...productinput1 };
			this.setState({ productinput: combine });
		}
	};
	override = `text-align: center;
	    display: block;
		margin-top: 25rem;
		margin-bottom: 40rem;`;
	render() {
		let relatedProduct = this.RelatedProduct();
		const arr = this.filter();
		if (this.state.loading) window.scrollTo(0, 0);

		return (
			<div>
				<Menu colr="menuContainer product-MenuContainer" />
				<Loading loading={this.state.loading} css={this.override} />
				{!this.state.loading && (
					<div className="ProductDetail-Container">
						<div className="ProductDetail-Section1">
							<div className="productDetail-ImageContainer">
								<div className="ProductDetail-MainImageContainer">
									{this.state.image && (
										<img
											src={
												require(`../../../images/${this.state.image}`).default
											}
											alt=""
										/>
									)}
								</div>
								<div className="ProductDetail-SideImageContainer">
									{arr[0] &&
										arr[0].image.map((i) => {
											return (
												<img
													key={i}
													onClick={() => this.handleClick(i)}
													src={require(`../../../images/${i}`).default}
													alt=""
												/>
											);
										})}
								</div>
							</div>
							<div className="ProductDetail-SideCardContainer">
								<button
									className="ProductDetail-BackButton"
									onClick={() => this.props.history.push("/Products")}
								>
									Home
								</button>
								{arr[0] && <span>/ {arr[0].type}</span>}
								{arr[0] && (
									<motion.h1
										initial={{ x: 800 }}
										animate={{ x: 0 }}
										transition={{ delay: 0.3, type: "tween" }}
									>
										{arr[0].itemNameDetail}
									</motion.h1>
								)}
								{arr[0] && (
									<motion.h3
										initial={{ x: 800 }}
										animate={{ x: 0 }}
										transition={{ delay: 0.3, type: "tween" }}
									>
										{arr[0].money} Kyat
									</motion.h3>
								)}
								<form>
									<select name="size" onChange={this.handleChange}>
										{arr[0] &&
											arr[0].size.map((s) => {
												return (
													<option key={s} value={s}>
														{s}
													</option>
												);
											})}
									</select>
									<div style={{ display: "flex" }}>
										<input
											name="count"
											onChange={this.handleChange}
											value={this.state.productinput.count}
											style={{
												display: "block",
												width: "45px",
												height: "30px",
												outline: "none",
											}}
											type="number"
											min="1"
											max="10"
										/>

										<Link
											to={{
												pathname: "/Products/Card",
												state: {
													productinput: this.state.productinput,
													item: arr,
												},
											}}
										>
											<button className="ProductDetail-FormButton">
												Add to Card
											</button>
										</Link>
									</div>
								</form>
								<h1 style={{ fontSize: "2rem", marginTop: "2rem" }}>
									PRODUCT DETAILS
								</h1>
								{arr[0] && (
									<motion.p
										initial={{ y: 800 }}
										animate={{ y: 0 }}
										transition={{ delay: 0.3, type: "tween" }}
									>
										{arr[0].productDetail}
									</motion.p>
								)}
							</div>
						</div>

						<div className="RelatedProduct-Container">
							<div className="RelatedProduct-Menu">
								<h1>Related Products</h1>
								<Link to="/Products" className="RelatedProduct-MenuLink">
									View More
								</Link>
							</div>
							<div className="RelatedProduct-Display">
								{relatedProduct.map((p) => {
									return (
										<div
											key={p.itemName}
											className="RelatedProduct-InnerDisplay"
										>
											{/* <Link to={`/Products-details/${p.itemName}`}> */}
											<img
												onClick={() =>
													(window.location = `/Products-details/${p.itemName}`)
												}
												className="RelatedProduct-imageContainer"
												src={require(`../../../images/${p.image[0]}`).default}
												alt=""
											/>
											{/* </Link> */}
											<h2>Ks {p.money}</h2>
											<h1>{p.itemName}</h1>
										</div>
									);
								})}
							</div>
						</div>
					</div>
				)}
			</div>
		);
	}
}

export default ProductDetail;
