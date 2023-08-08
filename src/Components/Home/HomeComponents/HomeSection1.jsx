import React, { Component } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

class HomeSection1 extends Component {
	render() {
		return (
			<div className="homeSection1-Container">
				<div className="homeSection1Text-Container">
					<motion.h1
						initial={{ x: -600 }}
						animate={{ x: 0 }}
						transition={{ type: "spring", delay: 0.3 }}
					>
						Give Your Workout A New Style!
					</motion.h1>
					<motion.p
						initial={{ x: -600 }}
						animate={{ x: 0 }}
						transition={{ type: "spring", delay: 0.3 }}
					>
						Success isn't always about greatness.It's about
						consistency.Consistent and hard work gain success. Greatness will
						come...
					</motion.p>
					<motion.div
						initial={{ y: -600 }}
						animate={{ y: 0 }}
						transition={{ type: "spring", delay: 0.3 }}
					>
						<Link className="btn-homeSection1" to="/Products">
							Explore Now
							<i className="bi bi-arrow-right"></i>
						</Link>
					</motion.div>
				</div>
				<div>
					<motion.img
						initial={{ y: 600 }}
						animate={{ y: 0 }}
						transition={{ type: "spring", delay: 0.3 }}
						className="homeSection1Image-Container"
						src={require("../../../images/image1.webp").default}
						alt=""
					/>
				</div>
			</div>
		);
	}
}

export default HomeSection1;
