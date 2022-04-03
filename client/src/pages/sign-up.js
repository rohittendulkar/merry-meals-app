import React, { useState } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import makeStyles from "@mui/styles/makeStyles";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import AdapterDayjs from "@mui/lab/AdapterDayjs";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";

//custom-hook
import useForm from "../hooks/forms";

import { signupUser } from "../redux/actions/authActions";
import {
	Divider,
	FormControlLabel,
	FormLabel,
	Paper,
	Radio,
	RadioGroup,
	Stack,
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
	const [birthdate, setDate] = useState(new Date());
	const handleDateChange = (date) => {
		console.log(date);
		setDate(date);
	};

	const [proof, setProof] = useState({});
	let fileError;

	const { message, errors } = errorsUser || {};

	if (message) {
		if (message.includes("Upload pdf proof")) fileError = message;
	}

	const handleFileSelect = (event) => {
		setProof(event.target.files);
	};

	// console.log(errors);
	let emailError = null;
	let passwordError = null;
	let confirmPasswordError = null;
	let firstNameEmptyError = null;
	let lastNameEmptyError = null;
	let streetError = null;
	let aptError = null;
	let localityError = null;
	let zipError = null;
	let phoneNoError = null;
	let genderEmptyError = null;
	let dateEmptyError = null;

	/* if (errors) {
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
	} */

	if (errors) {
		for (let error of errors) {
			if (error.msg.includes("First Name")) firstNameEmptyError = error.msg;
			if (error.msg.includes("Last Name")) lastNameEmptyError = error.msg;
			if (error.msg.includes("valid email")) emailError = error.msg;
			if (error.msg.includes("Email address already")) emailError = error.msg;
			if (error.msg.includes("least 6 characters long"))
				passwordError = error.msg;
			if (error.msg.includes("Passwords have to"))
				confirmPasswordError = error.msg;
			if (error.msg.includes("10 digit phone")) phoneNoError = error.msg;
			if (error.msg.includes("Zipcode cannot")) zipError = error.msg;
			if (error.msg.includes("Locality cannot")) localityError = error.msg;
			if (error.msg.includes("Apartment name cannot")) aptError = error.msg;
			if (error.msg.includes("Street cannot")) streetError = error.msg;
			if (error.msg.includes("Gender cannot")) genderEmptyError = error.msg;
			if (error.msg.includes("Enter Valid Birth")) dateEmptyError = error.msg;
		}
	}

	const signupHandle = (props) => {
		/* const newUserData = {
			email: inputs.email,
			firstName: inputs.firstName,
			lastName: inputs.lastName,
			gender: inputs.gender,
			birthDate: inputs.birthDate,
			role: "ROLE_USER",
			password: inputs.password,
			confirmPassword: inputs.confirmPassword,
		}; */
		const newUserData = new FormData();
		for (let i = 0; i < proof.length; i++) {
			newUserData.append("proof", proof[i]);
		}
		newUserData.append("firstName", inputs.firstName);
		newUserData.append("lastName", inputs.lastName);
		newUserData.append("email", inputs.email);
		newUserData.append("gender", inputs.gender);
		newUserData.append("birthdate", birthdate);
		newUserData.append("street", inputs.street);
		newUserData.append("aptName", inputs.aptName);
		newUserData.append("locality", inputs.locality);
		newUserData.append("zip", inputs.zip);
		newUserData.append("phoneNo", inputs.phoneNo);
		newUserData.append("password", inputs.password);
		newUserData.append("confirmPassword", inputs.confirmPassword);
		newUserData.append("role", "ROLE_USER");

		dispatch(signupUser(newUserData, history));
	};

	const { inputs, handleInputChange, handleSubmit } = useForm(
		{
			firstName: "",
			lastName: "",
			gender: "",
			email: "",
			password: "",
			confirmPassword: "",
			street: "",
			aptName: "",
			locality: "",
			zip: "",
			phoneNo: "",
		},
		signupHandle
	);

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
							style={{ display: "flex" }}
						>
							Gender
						</FormLabel>
						<Stack
							direction="row"
							alignItems="center"
							divider={<Divider orientation="vertical" flexItem />}
							spacing={2}
						>
							<RadioGroup
								row
								name="gender"
								value={inputs.gender}
								onChange={handleInputChange}
								style={{ marginLeft: "4px" }}
							>
								<FormControlLabel
									value="male"
									control={<Radio />}
									label="Male"
								/>
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
								{genderEmptyError && (
									<Typography
										variant="body2"
										component="p"
										style={{ margin: "4px 10px 2px 10px", color: "#f44336" }}
									>
										Gender empty
									</Typography>
								)}
							</RadioGroup>

							<LocalizationProvider dateAdapter={AdapterDayjs}>
								<DatePicker
									// inputFormat="YYYY/MM/DD"
									name="birthdate"
									label="Birth Date"
									value={birthdate}
									onChange={handleDateChange}
									renderInput={(params) => (
										<TextField {...params} helperText={dateEmptyError} />
									)}
								/>
							</LocalizationProvider>
						</Stack>
						<Typography
							variant="body2"
							component="p"
							style={{ margin: "10px 10px 2px 10px", textAlign: "left" }}
						>
							Address:
						</Typography>
						<div className={classes.address}>
							<TextField
								id="aptName"
								name="aptName"
								label="Floor/Apartment Name"
								className={classes.textField}
								onChange={handleInputChange}
								value={inputs.aptName}
								helperText={aptError}
								error={aptError ? true : false}
								fullWidth
								required
							/>
							<TextField
								id="locality"
								name="locality"
								label="Locality"
								className={classes.textField}
								onChange={handleInputChange}
								value={inputs.locality}
								helperText={localityError}
								error={localityError ? true : false}
								fullWidth
								required
							/>
							<TextField
								id="street"
								name="street"
								label="Street"
								className={classes.textField}
								onChange={handleInputChange}
								value={inputs.street}
								helperText={streetError}
								error={streetError ? true : false}
								fullWidth
								required
							/>
							<TextField
								id="zipCode"
								name="zip"
								label="Zip Code"
								className={classes.textField}
								onChange={handleInputChange}
								value={inputs.zip}
								helperText={zipError}
								error={zipError ? true : false}
								type="number"
								fullWidth
								required
							/>
							<TextField
								id="phoneNo"
								name="phoneNo"
								label="Contact Number"
								className={classes.textField}
								type="number"
								onChange={handleInputChange}
								value={inputs.phoneNo}
								helperText={phoneNoError}
								error={phoneNoError ? true : false}
								fullWidth
								required
							/>
						</div>
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
