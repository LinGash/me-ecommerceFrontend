import React from "react";
import { Link } from "react-router-dom";

const Products = (props) => {
	const { arr } = props;

	return (
		<div className="productSection1-ProductsContainer">
			{arr.map((p) => {
				return (
					<div
						key={p.itemName}
						className="productSection1-EachProductsContainer"
					>
						<Link to={`/Products-details/${p.itemName}`}>
							<div style={{ textAlign: "center" }}>
								<img
									className="productSection1-imageContainer"
									src={require(`../../../../images/${p.image[0]}`).default}
									alt=""
								/>
							</div>
						</Link>
						<div className="productSection1-EachProductsTextContainer">
							<Link
								href="#"
								style={{ textDecoration: "none", color: "black" }}
								to={`/Products-details/${p.itemName}`}
							>
								<h2>Ks {p.money}</h2>

								<h1>{p.itemName}</h1>
							</Link>
						</div>
						<Link
							to={`/Products-details/${p.itemName}`}
							style={{ textDecoration: "none" }}
						>
							<button className="productSection1-EachProductsButton">
								See details
							</button>
						</Link>
					</div>
				);
			})}
		</div>
	);
};

export default Products;
