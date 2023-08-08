import React, { Component } from "react";
import http from "../../../httpServices";
import { motion } from "framer-motion";
import Joi from "joi";

class ContactSection1 extends Component {
	state = {
		form: { first: "", last: "", email: "", message: "" },
		error: {},
		successfullyContacted: false,
	};
	handleChange = ({ currentTarget: input }) => {
		let obj = {};
		obj[input.name] = input.value;
		let form = { ...this.state.form, ...obj };
		this.setState({ form });
		this.handleValidation(input);
	};
	handleValidation(input) {
		let obj1 = { [input.name]: input.value };
		let obj2 = Joi.object({ [input.name]: this.schema[input.name] });
		const options = {
			errors: {
				wrap: {
					label: "",
				},
			},
		};
		let { error } = obj2.validate(obj1, options);
		let errormessage;
		if (!error) errormessage = { [input.name]: "" };
		if (error) errormessage = { [input.name]: error.details[0].message };
		let errormessageobj = { ...this.state.error, ...errormessage };
		this.setState({ error: errormessageobj });
	}
	validation() {
		let { error } = Joi.object(this.schema).validate(this.state.form, {
			abortEarly: false,
		});
		return error;
	}
	schema = {
		first: Joi.string().required().label("first Name"),
		last: Joi.string().required().label("Last Name"),
		email: Joi.string()
			.email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
			.label("Email"),
		message: Joi.string().required().label("Message"),
	};
	handleSubmit = (e) => {
		e.preventDefault();
		const obj = this.state.form;
		http.post("/receiveContact", obj);
		this.setState({ successfullyContacted: true });
	};
	render() {
		const { first, last, email, message } = this.state.form;
		const { error } = this.state;
		return (
			<div>
				<div className="ContactSection1-Container">
					<h1>HAVE SOME QUESTIONS?</h1>
					<div className="IconForm-Container">
						<motion.i
							initial={{ x: -800 }}
							animate={{ x: 0 }}
							transition={{ delay: 0.3, type: "spring" }}
							className="fas fa-envelope-open-text"
						></motion.i>
						<motion.form
							initial={{ y: 800 }}
							animate={{ y: 0 }}
							transition={{ delay: 0.3, type: "tween" }}
							autoComplete="off"
							onSubmit={this.handleSubmit}
						>
							<div>
								<input
									type="text"
									placeholder="First Name"
									onChange={this.handleChange}
									name="first"
									value={first}
								/>
								{error.first && <h2>{error.first}</h2>}
							</div>
							<div>
								<input
									name="last"
									placeholder="Last Name"
									type="text"
									onChange={this.handleChange}
									value={last}
								/>
								{error.last && <h2>{error.last}</h2>}
							</div>
							<div>
								<input
									name="email"
									placeholder="What's your email?"
									type="email"
									onChange={this.handleChange}
									value={email}
								/>
								{error.email && <h2>{error.email}</h2>}
							</div>
							<section>
								<textarea
									name="message"
									placeholder="Your questions..."
									className="InputQ"
									onChange={this.handleChange}
									cols="30"
									rows="10"
									value={message}
								/>
								{error.message && <h2>{error.message}</h2>}
							</section>
							<div>
								<input
									disabled={this.validation()}
									className="submit"
									type="submit"
								/>
							</div>
						</motion.form>
					</div>
				</div>
				{this.state.successfullyContacted && (
					<div className="float">
						<form action="">
							<>
								<h1>
									<i style={{ paddingRight: "1rem" }} class="fas fa-check"></i>
									Successfully Sent
								</h1>
							</>
							<div
								style={{ justifyContent: "center" }}
								className="formBtnContainer"
							>
								<button
									onClick={(e) => {
										e.preventDefault();
										this.setState({ successfullyContacted: false });
										window.location = "/Contact";
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

export default ContactSection1;
