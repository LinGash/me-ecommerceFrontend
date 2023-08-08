import React, { Component } from "react";
import { motion } from "framer-motion";
import Loading from "../../loading";
import Menu from "../Menu";

class About extends Component {
	state = { imgLoading: true };
	override = `text-align: center;
	    display: block;
		margin-top: 25rem;
		margin-bottom: 40rem;`;

	render() {
		return (
			<div className="About-Container">
				<Menu colr="menuContainer about-MenuContainer" />
				<Loading loading={this.state.imgLoading} css={this.override} />
				<div>
					{!this.state.imgLoading && <h1>About us</h1>}
					<div className="AboutSection1-Container">
						<motion.p
							initial={{ y: 800 }}
							animate={{ y: 0 }}
							transition={{ delay: 0.3 }}
							style={{}}
						>
							<motion.img
								initial={{ x: -800 }}
								animate={{ x: 0 }}
								transition={{ delay: 0.3 }}
								className="AboutImage-Container"
								src={require("../../images/businessladies.svg").default}
								onLoad={() => this.setState({ imgLoading: false })}
								alt=""
							/>
							{!this.state.imgLoading &&
								`
							Albert Einstein was born at Ulm, in Württemberg, Germany, on March
							14, 1879. Six weeks later the family moved to Munich, where he
							later on began his schooling at the Luitpold Gymnasium. Later,
							they moved to Italy and Albert continued his education at Aarau,
							Switzerland and in 1896 he entered the Swiss Federal Polytechnic
							School in Zurich to be trained as a teacher in physics and
							mathematics. In 1901, the year he gained his diploma, he acquired
							Swiss citizenship and, as he was unable to find a teaching post,
							he accepted a position as technical assistant in the Swiss Patent
							Office. In 1905 he obtained his doctor’s degree. During his stay
							at the Patent Office, and in his spare time, he produced much of
							his remarkable work and in 1908 he was appointed Privatdozent in
							Berne. In 1909 he became Professor Extraordinary at Zurich, in
							1911 Professor of Theoretical Physics at Prague, returning to
							Zurich in the following year to fill a similar post. In 1914 he
							was appointed Director of the Kaiser Wilhelm Physical Institute
							and Professor in the University of Berlin. He became a German
							citizen in 1914 and remained in Berlin until 1933 when he
							renounced his citizenship for political reasons and emigrated to
							America to take the position of Professor of Theoretical Physics
							at Princeton*. He became a United States citizen in 1940 and
							retired from his post in 1945.`}
						</motion.p>
					</div>
				</div>
			</div>
		);
	}
}

export default About;
