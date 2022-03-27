import React, { useState } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import makeStyles from '@mui/styles/makeStyles';
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";

//custom-hook
import useForm from "../hooks/forms";

import { signupUser } from "../redux/actions/authActions";
import {
	FormControlLabel,
	FormLabel,
	Paper,
	Radio,
	RadioGroup,
} from "@mui/material";

const useStyles = makeStyles((theme) => ({
	...theme.spreadThis,
	title: {
		margin: "48px 0px 10px 0px",
	},
	alignLeft: {
		textAlign: "left",
	},
	paper: {
		padding: theme.spacing(2),
	},
}));

export default function Register() {
	const classes = useStyles();

	const { loading, serverError, errorsUser } = useSelector((state) => state.UI);
	const dispatch = useDispatch();
	const history = useHistory();
	const [proof, setProof] = useState({});
	let fileError;

	const { message, errors } = errorsUser || {};

	if (message) {
		if (message.includes("Upload a file")) fileError = message;
	}

	const handleFileSelect = (event) => {
		setProof(event.target.files);
	};

	const signupHandle = (props) => {
		const newUserData = {
			email: inputs.email,
			firstName: inputs.firstName,
			lastName: inputs.lastName,
			gender: inputs.gender,
			birthDate: inputs.birthDate,
			role: "ROLE_USER",
			password: inputs.password,
			confirmPassword: inputs.confirmPassword,
		};
		dispatch(signupUser(newUserData, history));
	};

	const { inputs, handleInputChange, handleSubmit } = useForm(
		{
			firstName: "",
			lastName: "",
			gender: "",
			birthDate: "",
			email: "",
			password: "",
			confirmPassword: "",
		},
		signupHandle
	);

	// console.log(errors);
	let emailError = null;
	let passwordError = null;
	let confirmPasswordError = null;
	let firstNameEmptyError = null;
	let lastNameEmptyError = null;
	let genderEmptyError = null;
	let birthDateEmptyError = null;

	if (errors) {
		if (typeof errors !== "string") {
			for (let i = 0; i < errors.length; i++) {
				if (errors[i].msg.includes("First Name"))
					firstNameEmptyError = errors[i].msg;
				if (errors[i].msg.includes("Last Name"))
					lastNameEmptyError = errors[i].msg;
				if (errors[i].msg.includes("valid email")) emailError = errors[i].msg;
				if (errors[i].msg.includes("Email address already"))
					emailError = errors[i].msg;
				if (errors[i].msg.includes("least 6 characters long"))
					passwordError = errors[i].msg;
				if (errors[i].msg.includes("Passwords have to"))
					confirmPasswordError = errors[i].msg;
			}
		}
	}

	return (
		<Grid container className={classes.form}>
			<Grid item sm />
			<Grid item sm>
				<Paper className={classes.paper}>
					<Typography variant="h3" className={classes.title}>
						Register{" "}
						<span role="img" aria-label="Pizza Emoji">
							🍕
						</span>
					</Typography>
					<form noValidate onSubmit={handleSubmit}>
						<TextField
							id="firstName"
							name="firstName"
							label="First Name"
							onChange={handleInputChange}
							value={inputs.firstName}
							className={classes.textField}
							helperText={firstNameEmptyError}
							error={firstNameEmptyError ? true : false}
							fullWidth
							required
						/>
						<TextField
							id="lastName"
							name="lastName"
							label="Last Name"
							onChange={handleInputChange}
							value={inputs.lastName}
							className={classes.textField}
							helperText={lastNameEmptyError}
							error={lastNameEmptyError ? true : false}
							fullWidth
							required
						/>
						<TextField
							id="email"
							name="email"
							label="Email"
							onChange={handleInputChange}
							value={inputs.email}
							className={classes.textField}
							fullWidth
							helperText={emailError}
							error={emailError ? true : false}
							required
						/>
						<FormLabel
							className={classes.textField}
							name="gender-label"
							style={{ display: "flex" }}
						>
							Gender
						</FormLabel>
						<RadioGroup
							row
							name="gender"
							value={inputs.gender}
							onChange={handleInputChange}
							style={{ marginLeft: "4px" }}
						>
							<FormControlLabel value="male" control={<Radio />} label="Male" />
							<FormControlLabel
								value="female"
								control={<Radio />}
								label="Female"
							/>
							<FormControlLabel
								value="other"
								control={<Radio />}
								label="Other"
							/>
						</RadioGroup>
						<Typography
							variant="body2"
							component="p"
							style={{ margin: "10px 10px 2px 10px" }}
							className={classes.alignLeft}
						>
							Upload PDF Proof:
						</Typography>
						<input
							accept="application/pdf"
							className={classes.uploadImages}
							style={{ display: "flex" }}
							id="raised-button-file"
							multiple
							type="file"
							onChange={handleFileSelect}
						/>
						{fileError && (
							<Typography
								variant="body2"
								component="p"
								style={{ margin: "4px 10px 2px 10px", color: "#f44336" }}
							>
								Upload a pdf proof as well
							</Typography>
						)}
						<TextField
							id="password"
							name="password"
							type="password"
							label="Password"
							onChange={handleInputChange}
							value={inputs.password}
							className={classes.textField}
							helperText={passwordError}
							error={passwordError ? true : false}
							fullWidth
							required
						/>
						<TextField
							id="confirmPassword"
							name="confirmPassword"
							type="password"
							label="Confirm Password"
							onChange={handleInputChange}
							value={inputs.confirmPassword}
							className={classes.textField}
							helperText={passwordError ? passwordError : confirmPasswordError}
							error={passwordError ? true : confirmPasswordError ? true : false}
							fullWidth
							required
						/>

						{serverError && (
							<Typography variant="body2" className={classes.customError}>
								{"server error, please try again"}
							</Typography>
						)}

						<Button
							type="submit"
							variant="contained"
							color="primary"
							className={classes.button}
							disabled={loading}
						>
							Sign-up
							{loading && (
								<CircularProgress size={30} className={classes.progress} />
							)}
						</Button>
						<br />
						<small className={classes.small}>
							Already have an account ? Login <Link to="/login">here</Link>
						</small>
					</form>
				</Paper>
			</Grid>
			<Grid item sm />
		</Grid>
	);
}
