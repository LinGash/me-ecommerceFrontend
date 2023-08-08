import React from "react";
import { motion } from "framer-motion";

const ProductSection1Menu = (props) => {
	const {
		categoryClicked,
		handleCategory,
		handleCategoryAllButton,
		toFalseFromMenuSelect,
		handleChange,
		state,
		handleSearch,
	} = props;
	function categoryArrow() {
		return state.categoryClicked ? "fas fa-sort-up" : "fas fa-sort-down";
	}
	function categoryExpandable() {
		return state.categoryClicked
			? "category-expandable exist"
			: "category-expandable";
	}
	function categoryTypes() {
		let data = [...state.data];
		let category = [];
		let i = 0;
		for (let p of data) {
			if (!category.includes(p.type.toLowerCase())) {
				i++;
				category[i - 1] = p.type.toLowerCase();
			}
		}
		return category;
	}
	function categoriesButton() {
		if (state.categories.toLowerCase() === "all") return "Categories";
		return state.categories ? state.categories.toUpperCase() : "Categories";
	}

	return (
		<div className="productSection1-MenuContainer">
			<motion.div
				initial={{ x: -300 }}
				animate={{ x: 0 }}
				transition={{ type: "spring", delay: 0.3 }}
				style={{ position: "relative" }}
			>
				<div className="category">
					<button onClick={categoryClicked}>
						<i className="fas fa-list"></i>
						{categoriesButton()}
						<i className={categoryArrow()}></i>
					</button>
				</div>
				<div className={categoryExpandable()}>
					{categoryTypes().map((p) => {
						return (
							<div key={p}>
								<button
									className="category-expandableExistButton"
									onClick={() => handleCategory(p)}
								>
									{p.toUpperCase()}
								</button>
							</div>
						);
					})}
					<div>
						<button
							className="category-expandableExistButton"
							onClick={handleCategoryAllButton}
						>
							All
						</button>
					</div>
				</div>
			</motion.div>
			<div className="ProductSection1Menu-SearchContainer">
				<form>
					<input
						type="text"
						placeholder="What are you looking for..."
						value={state.search}
						onChange={handleSearch}
					/>
					<button>Search</button>
				</form>
			</div>
			<motion.div
				initial={{ x: 300 }}
				animate={{ x: 0 }}
				transition={{ type: "spring", delay: 0.3 }}
				onClick={toFalseFromMenuSelect}
				className="productSection1-MenuContainerSelect"
			>
				<select onChange={(e) => handleChange(e)} name="hello" id="">
					<option value="">default sorting</option>
					<option value="l-h">sort by Price-Low to High</option>
					<option value="h-l">sort by Price-High to Low</option>
					<option value="name">sort by itemName</option>
				</select>
			</motion.div>
		</div>
	);
};

export default ProductSection1Menu;
