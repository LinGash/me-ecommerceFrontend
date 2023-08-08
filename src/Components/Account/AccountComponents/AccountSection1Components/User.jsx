import React, { useState } from "react";
import http from "../../../../httpServices";
import Joi from "joi";
import { motion } from "framer-motion";

export default function User({ user, logoutUser }) {
	const { username, email } = user;
	const [editClick, setEditClick] = useState(false);
	const [float, setFloat] = useState({
		label: "",
		value: "",
	});
	const [error, setError] = useState({ message: "" });
	const schema = {
		Name: Joi.string().min(5).max(30).required(),
		Email: Joi.string().email({
			minDomainSegments: 2,
			tlds: { allow: ["com", "net"] },
		}),
		Password: Joi.string().min(6).max(30).required(),
	};
	const [profile, setProfile] = useState([
		{ label: "Name", value: username },
		{ label: "Email", value: email },
		{ label: "Password", value: "*****" },
	]);

	function handleEdit(p) {
		setEditClick(true);
		setError({ message: "" });
		if (p.label === "Password") {
			setFloat({ label: p.label, value: "" });
		} else {
			setFloat({ label: p.label, value: p.value });
		}
	}
	function handleChange({ currentTarget: input }) {
		setFloat({ label: input.name, value: input.value });
		let obj = Joi.object({
			[input.name]: schema[input.name],
		});
		const options = {
			errors: {
				wrap: {
					label: "",
				},
			},
		};
		let { error } = obj.validate({ [input.name]: input.value }, options);
		if (!error) {
			setError({ message: "" });
			return;
		}
		setError({ message: error.details[0].message });
	}
	function handleSubmit(e) {
		e.preventDefault();
		const arr = profile.map((p) => {
			if (p.label !== "Password") {
				return p.label === float.label ? { ...p, ...float } : p;
			}
			return p;
		});
		setProfile(arr);
		setEditClick(false);
		const jwt = localStorage.getItem("token");
		http
			.put("/userProfileEdit", {
				jwt,
				...float,
			})
			.then(({ data }) => {
				localStorage.removeItem("token");
				localStorage.setItem("token", data);
			});
	}
	const container = {
		hidden: { opacity: 1 },
		visible: {
			opacity: 1,
			transition: {
				delayChildren: 0.3,
				staggerChildren: 0.2,
			},
		},
	};

	const item = {
		hidden: { y: 20, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
		},
	};
	return (
		<div>
			<motion.article
				variants={container}
				initial="hidden"
				animate="visible"
				style={{ pointerEvents: editClick ? "none" : "visible" }}
				className="User-Container"
			>
				{profile.map((p) => {
					return (
						<div>
							<motion.section variants={item}>
								<h1>{p.label}</h1>
								<h2>{p.value}</h2>
							</motion.section>
							<button onClick={() => handleEdit(p)}>Edit</button>
						</div>
					);
				})}
				<footer>
					<button onClick={logoutUser}>Log Out</button>
				</footer>
			</motion.article>
			{editClick && (
				<div className="float">
					<form action="">
						<>
							<h1>{float.label}</h1>
							<div className="editInputContainer">
								<input
									autoComplete="off"
									onChange={handleChange}
									name={float.label}
									type="text"
									value={float.value}
								/>
								{error.message && <h6>{error.message}</h6>}
							</div>
						</>
						<div className="formBtnContainer">
							<button
								className="save"
								disabled={error.message}
								onClick={handleSubmit}
							>
								Save
							</button>
							<button
								className="cancel"
								onClick={(e) => {
									e.preventDefault();
									setEditClick(false);

									setError({ message: "" });
								}}
							>
								Cancel
							</button>
						</div>
					</form>
				</div>
			)}
		</div>
	);
}
