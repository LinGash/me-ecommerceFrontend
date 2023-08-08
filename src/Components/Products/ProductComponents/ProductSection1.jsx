import React, { Component } from "react";
import http from "../../../httpServices";
import ProductSection1Menu from "./ProductSection1Componenets/Menu";
import Products from "./ProductSection1Componenets/Products";
import Pagination from "./ProductSection1Componenets/Pagination";
import Loading from "../../../loading";

class ProductSection1 extends Component {
	state = {
		data: [],
		onePageNum: 12,
		pageclicked: 1,
		sort: "",
		categories: "",
		categoryClicked: false,
		search: "",
		loading: true,
	};
	componentDidMount() {
		window.scrollTo(0, 0);
		http
			.get("/products")
			.then(({ data }) => this.setState({ data, loading: false }));
	}
	categorization(c) {
		let data = [...this.state.data];
		let categorized = data.filter((p) => {
			return p.type.toLowerCase() === c;
		});

		if (!categorized[0]) return data;
		return categorized;
	}

	sorting() {
		let products = this.categorization(this.state.categories);
		if (this.state.sort === "name") {
			return products.sort((a, b) => {
				if (a.itemName < b.itemName) return -1;
				if (a.itemName > b.itemName) return 1;
			});
		}
		if (this.state.sort === "h-l") {
			return products.sort((a, b) => {
				if (a.money > b.money) return -1;
				if (a.money < b.money) return 1;
			});
		}
		if (this.state.sort === "l-h") {
			return products.sort((a, b) => {
				if (a.money < b.money) return -1;
				if (a.money > b.money) return 1;
			});
		}

		return products;
	}
	Search() {
		let arr = this.sorting();
		// if(!this.state.search) return arr;
		return arr.filter((p) =>
			p.itemName.toLowerCase().startsWith(this.state.search.toLowerCase())
		);
	}
	pageCount() {
		let data = this.sorting();
		let pageNum = Math.ceil(data.length / this.state.onePageNum);
		let arr = [];
		for (let i = 1; i <= pageNum; i++) {
			arr.push(i);
		}
		return arr;
	}
	handlePage = (p) => {
		window.scroll(0, 0);
		this.setState({ pageclicked: p });
	};
	handleChange = ({ currentTarget: input }) => {
		this.setState({ sort: input.value });
	};

	categoryClicked = () => {
		if (!this.state.categoryClicked) this.setState({ categoryClicked: true });
		else this.setState({ categoryClicked: false });
	};

	handleCategory = (p) => {
		if (this.state.pageclicked > 1) {
			this.setState({ pageclicked: 1 });
		}
		this.setState({ categories: p });
	};
	handleCategoryAllButton = () => {
		this.setState({ categories: "All" });
	};
	toFalseFromMenuSelect = () => {
		this.setState({ categoryClicked: false });
	};
	handleSearch = ({ currentTarget: input }) => {
		this.setState({ pageclicked: 1 });
		this.setState({ search: input.value });
	};
	override = `text-align: center;
				display: block;
		        `;
	render() {
		let page = this.pageCount();
		let products = this.Search();
		let front =
			this.state.pageclicked === 1
				? 0
				: this.state.onePageNum * (this.state.pageclicked - 1);
		let back = this.state.onePageNum * this.state.pageclicked;
		let arr = products.slice(front, back);

		return (
			<div className="productSection1-Container">
				<ProductSection1Menu
					categoryClicked={this.categoryClicked}
					handleCategory={this.handleCategory}
					handleCategoryAllButton={this.handleCategoryAllButton}
					toFalseFromMenuSelect={this.toFalseFromMenuSelect}
					handleChange={this.handleChange}
					state={this.state}
					handleSearch={this.handleSearch}
				/>
				{arr[0] && <Products arr={arr} />}

				<Loading loading={this.state.loading} css={this.override} />

				{!arr[0] && !this.state.loading && <h1>Nothing Found</h1>}

				{arr[0] && (
					<Pagination
						page={page}
						state={this.state}
						handlePage={this.handlePage}
					/>
				)}
			</div>
		);
	}
}

export default ProductSection1;
