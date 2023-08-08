import React, { Component } from "react";
import Joi from "joi";
import { motion } from "framer-motion";
import jwt_decode from "jwt-decode";
import http from "../../../httpServices";
import Register from "./AccountSection1Components/Register";
import Login from "./AccountSection1Components/Login";
import User from "./AccountSection1Components/User";

class AccountSecion1 extends Component {
	state = {
		register: { username: "", email: "", password: "", comfirmPassword: "" },
		login: { email: "", password: "" },
		registerError: {},
		loginError: {},
		loginUser: {},
		successfullyLogined: false,
		successfullyRegistered: false,
		user: false,
	};
	componentDidMount() {
		window.scrollTo(0, 0);
		let jwt = localStorage.getItem("token");
		if (jwt) {
			let user = jwt_decode(jwt);
			this.setState({ loginUser: user });
			this.setState({ user: true });
		}
	}
	registerSchema = {
		username: Joi.string().required().label("Username"),
		email: Joi.string()
			.email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
			.required()
			.label("Email"),
		password: Joi.string()
			.alphanum()
			.min(6)
			.max(30)
			.required()
			.label("Password"),
		comfirmPassword: Joi.any()
			.equal(Joi.ref("password"))
			.required()
			.label("Confirm password")
			.options({ messages: { "any.only": "{{#label}} does not match" } }),
	};
	loginSchema = {
		email: Joi.string()
			.trim()
			.email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
			.label("Email"),
		password: Joi.string().required().label("Password"),
	};
	validation(input, schema, prevErrorObj) {
		let obj1 = "";
		let obj2 = "";
		if (input.name === "comfirmPassword") {
			obj1 = Joi.object({
				[input.name]: schema[input.name],
				password: schema.password,
			});
			obj2 = {
				[input.name]: input.value,
				password: this.state.register.password,
			};
		}
		if (input.name !== "comfirmPassword") {
			obj1 = Joi.object({ [input.name]: schema[input.name] });
			obj2 = { [input.name]: input.value };
		}
		const options = {
			errors: {
				wrap: {
					label: "",
				},
			},
		};
		let { error } = obj1.validate(obj2, options);
		return error
			? {
					...prevErrorObj,
					...{ [input.name]: error.details[0].message },
			  }
			: {
					...prevErrorObj,
					...{ [input.name]: "" },
			  };
	}
	handleRegister = ({ currentTarget: input }) => {
		let register = { ...this.state.register, ...{ [input.name]: input.value } };
		this.setState({ register });
		let registerError = this.validation(
			input,
			this.registerSchema,
			this.state.registerError
		);
		this.setState({ registerError });
	};
	handleRegisterSubmit = (e) => {
		e.preventDefault();
		this.getRegisterUser();
	};
	async getRegisterUser() {
		const { username, password, email } = this.state.register;
		let register = { username, password, email };
		let { data } = await http.post("/register", register);
		if (data.error) {
			this.setState({ registerError: { email: data.error } });
			return;
		}
		this.setState({ successfullyRegistered: true });
		this.setState({ registerError: { email: "" } });
		const jwt = data;
		localStorage.setItem("token", jwt);
		const user = jwt_decode(jwt);
		this.setState({ loginUser: user });
		window.scrollTo(0, 0);
	}
	handleLoginSubmit = (e) => {
		e.preventDefault();
		this.getLoginUser();
	};
	async getLoginUser() {
		let { data } = await http.post("/login", this.state.login);

		if (data.error) {
			this.setState({ loginError: { email: data.error } });
			return;
		}
		this.setState({ successfullyLogined: true });
		this.setState({ loginError: { email: "" } });
		const jwt = data;
		localStorage.setItem("token", jwt);
		const user = jwt_decode(jwt);
		this.setState({ loginUser: user });
		window.scrollTo(0, 0);
	}
	handleLogin = ({ currentTarget: input }) => {
		let login = { ...this.state.login, ...{ [input.name]: input.value } };
		this.setState({ login });
		let loginError = this.validation(
			input,
			this.loginSchema,
			this.state.loginError
		);
		this.setState({ loginError });
	};
	logoutUser = () => {
		localStorage.removeItem("token");
		window.location = "/Account";
	};

	render() {
		const {
			login,
			register,
			registerError,
			loginError,
			clicked,
			loginUser,
			user,
		} = this.state;

		return (
			<div>
				{!user && (
					<div className="AccountSection1-Container">
						<div className="AccountSection1-InnerContainer">
							<motion.img
								initial={{ y: -800 }}
								animate={{ y: 0 }}
								transition={{ delay: 0.3, type: "spring" }}
								src={require("../../../images/image1.webp").default}
								alt="football"
							/>
							<div className="loginRegister-Container">
								<div className="loginRegister-Menu">
									<h1 onClick={() => this.setState({ clicked: false })}>
										Login
									</h1>
									<h2 onClick={() => this.setState({ clicked: true })}>
										Register
									</h2>
								</div>
								<hr
									className={
										this.state.clicked ? "rollToRegister" : "rollToLogin"
									}
								/>
								{!clicked && (
									<Login
										handleLogin={this.handleLogin}
										handleLoginSubmit={this.handleLoginSubmit}
										schema={this.loginSchema}
										login={login}
										loginError={loginError}
									/>
								)}
								{clicked && (
									<Register
										handleRegister={this.handleRegister}
										handleRegisterSubmit={this.handleRegisterSubmit}
										schema={this.registerSchema}
										register={register}
										registerError={registerError}
									/>
								)}
							</div>
						</div>
					</div>
				)}
				{user && <User user={loginUser} logoutUser={this.logoutUser} />}
				{this.state.successfullyLogined && (
					<div className="float">
						<form action="">
							<>
								<h1>
									<i style={{ paddingRight: "1rem" }} class="fas fa-check"></i>
									Successfully Logined
								</h1>
							</>
							<div
								style={{ justifyContent: "center" }}
								className="formBtnContainer"
							>
								<button
									onClick={(e) => {
										e.preventDefault();
										this.setState({ successfullyLogined: false });
										this.setState({ user: true });
									}}
									className="ph-cancel"
								>
									Ok
								</button>
							</div>
						</form>
					</div>
				)}
				{this.state.successfullyRegistered && (
					<div className="float">
						<form action="">
							<>
								<h1>
									<i style={{ paddingRight: "1rem" }} class="fas fa-check"></i>
									Successfully Registered
								</h1>
							</>
							<div
								style={{ justifyContent: "center" }}
								className="formBtnContainer"
							>
								<button
									onClick={(e) => {
										e.preventDefault();
										this.setState({ successfullyRegistered: false });
										this.setState({ user: true });
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

export default AccountSecion1;
