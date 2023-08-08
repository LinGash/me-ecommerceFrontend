import React from "react";
import Joi from "joi";

const Register = ({
	handleRegister,
	handleRegisterSubmit,
	register,
	registerError,
	schema,
}) => {
	function btnErrCheck() {
		let { error } = Joi.object(schema).validate(register);
		return error;
	}
	return (
		<form
			onSubmit={handleRegisterSubmit}
			autoComplete="off"
			className="register-Container"
		>
			<div>
				<input
					onChange={handleRegister}
					value={register.username}
					name="username"
					type="text"
					placeholder="Username"
				/>
				{registerError.username && <p>{registerError.username}</p>}
			</div>

			<div>
				<input
					onChange={handleRegister}
					value={register.email}
					name="email"
					type="text"
					placeholder="Email"
				/>
				{registerError.email && <p>{registerError.email}</p>}
			</div>

			<div>
				<input
					onChange={handleRegister}
					value={register.password}
					name="password"
					type="password"
					placeholder="Password"
				/>
				{registerError.password && <p>{registerError.password}</p>}
			</div>
			<div>
				<input
					onChange={handleRegister}
					value={register.comfirmPassword}
					name="comfirmPassword"
					type="password"
					placeholder="Comfirm Password"
				/>
				{registerError.comfirmPassword && (
					<p>{registerError.comfirmPassword}</p>
				)}
			</div>

			<button disabled={btnErrCheck()} type="submit">
				Register
			</button>
		</form>
	);
};

export default Register;
