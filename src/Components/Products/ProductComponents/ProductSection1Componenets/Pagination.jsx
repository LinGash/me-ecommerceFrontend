import React from "react";

const Pagination = (props) => {
	const { page, state, handlePage } = props;
	let pagebutton = (p) => {
		return p === state.pageclicked ? "clicked" : "pagebutton";
	};
	return (
		<div className="Pagination-Container">
			{page.map((p) => {
				return (
					<button
						key={p}
						className={pagebutton(p)}
						style={{
							border: "0",
							borderRadius: "3rem",
							cursor: "pointer",
							height: "45px",
							marginRight: "2rem",
							marginTop: "10px",
							width: "45px",
							listStyle: "none",
						}}
						onClick={() => handlePage(p)}
					>
						{p}
					</button>
				);
			})}
		</div>
	);
};

export default Pagination;
