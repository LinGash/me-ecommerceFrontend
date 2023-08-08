import React, { Component } from "react";

class HomeSection4 extends Component {
	state = {};
	render() {
		return (
			<div className="homeSection4-Container">
				<div className="testimonial-card">
					<i className="fa fa-quote-left helo" aria-hidden="true"></i>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste magnam
						quos nisi ad. Necessitatibus aliquid accusantium quos nesciunt
						debitis neque?
					</p>

					<img src={require("../../../images/user-1.png").default} alt="" />
					<h1>Scam Parker</h1>
				</div>
				<div className="testimonial-card">
					<i className="fa fa-quote-left helo" aria-hidden="true"></i>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste magnam
						quos nisi ad. Necessitatibus aliquid accusantium quos nesciunt
						debitis neque?
					</p>

					<img src={require("../../../images/user-2.png").default} alt="" />
					<h1>Mike Smith</h1>
				</div>
				<div className="testimonial-card">
					<i className="fa fa-quote-left helo" aria-hidden="true"></i>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste magnam
						quos nisi ad. Necessitatibus aliquid accusantium quos nesciunt
						debitis neque?
					</p>

					<img src={require("../../../images/user-3.png").default} alt="" />
					<h1>Mabel Joe</h1>
				</div>
			</div>
		);
	}
}

export default HomeSection4;
