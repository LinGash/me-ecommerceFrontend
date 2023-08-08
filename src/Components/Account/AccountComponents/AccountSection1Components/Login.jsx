import Joi from "joi";
import React from "react";

const Login = ({
	handleLogin,
	handleLoginSubmit,
	login,
	schema,
	loginError,
}) => {
	function btnErrCheck() {
		let { error } = Joi.object(schema).validate(login);
		return error;
	}
	return (
		<form
			onSubmit={handleLoginSubmit}
			autoComplete="off"
			className="login-Container"
		>
			<div>
				<input
					onChange={handleLogin}
					value={login.email}
					name="email"
					type="text"
					placeholder="Username"
				/>
				{loginError.email && <p>{loginError.email}</p>}
			</div>

			<div>
				<input
					onChange={handleLogin}
					value={login.password}
					name="password"
					type="password"
					placeholder="Password"
				/>
				{loginError.password && <p>{loginError.password}</p>}
			</div>
			<button disabled={btnErrCheck()}>Login</button>
			<h1>forgot password</h1>
		</form>
	);
};

export default Login;
