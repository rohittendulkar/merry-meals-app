import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import { useDispatch } from "react-redux";
import {
	Button,
	Divider,
	FormControlLabel,
	FormLabel,
	Radio,
	RadioGroup,
	Stack,
	TextField,
	FormControl,
	Paper,
} from "@mui/material";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import DatePicker from "@mui/lab/DatePicker";
import { registerAction } from "../redux/action/userAction";

const useStyles = makeStyles((theme) => ({
	form: {
		textAlign: "center",
		marginBottom: theme.spacing(10),
		marginTop: theme.spacing(10),
	},
	textField: {
		margin: 10,
	},
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

	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [gender, setGender] = useState("");
	const [birthDate, setDate] = useState(new Date());
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [address, setAddress] = useState("");
	const [street, setStreet] = useState("");
	const [locality, setLocality] = useState("");
	const [zip, setZip] = useState("");
	const [proof, setProof] = useState({});
	const [phone, setPhone] = useState("");

	const dispatch = useDispatch();

	const register = async (e) => {
		e.preventDefault();

		let user = new FormData();

		user.append("firstName", firstName);
		user.append("lastName", lastName);
		user.append("gender", gender);
		user.append("birthDate", birthDate);
		user.append("email", email);
		user.append("password", password);
		user.append("address", address);
		user.append("street", street);
		user.append("locality", locality);
		user.append("zip", zip);
		user.append("phone", phone);
		for (let i = 0; i < proof.length; i++) {
			user.append("proof", proof[i]);
		}

		dispatch(registerAction(user));
	};

	return (
		<div style={{ display: "block" }}>
			<Grid container className={classes.form}>
				<Grid item xs={3} />
				<Grid item xs={7}>
					<Paper sx={{ pr: 2 }}>
						<Typography variant="h3" className={classes.title}>
							Register{" "}
							<span role="img" aria-label="Pizza Emoji">
								🍕
							</span>
						</Typography>
						<br />
						<form noValidate>
							<FormControl fullWidth sx={{ m: 1 }}>
								<FormLabel
									className={classes.textField}
									style={{ display: "flex" }}
								>
									Personal Details
								</FormLabel>
								<TextField
									id="firstName"
									name="firstName"
									label="First Name"
									onChange={(e) => setFirstName(e.target.value)}
									value={firstName}
									className={classes.textField}
									fullWidth
									required
								/>
							</FormControl>
							<FormControl fullWidth sx={{ m: 1 }}>
								<TextField
									id="lastName"
									name="lastName"
									label="Last Name"
									onChange={(e) => setLastName(e.target.value)}
									value={lastName}
									className={classes.textField}
									fullWidth
									required
								/>
							</FormControl>
							<FormControl fullWidth sx={{ m: 1 }}>
								<TextField
									id="email"
									name="email"
									label="Email"
									onChange={(e) => setEmail(e.target.value)}
									value={email}
									className={classes.textField}
									fullWidth
									required
								/>
							</FormControl>
							<FormControl fullWidth sx={{ m: 1 }}>
								<Stack
									direction="row"
									alignItems="center"
									divider={<Divider orientation="vertical" flexItem />}
									spacing={2}
									sx={{ my: 2 }}
								>
									<FormControl fullWidth sx={{ m: 1 }}>
										<FormLabel
											className={classes.textField}
											style={{ display: "flex" }}
										>
											Gender *
										</FormLabel>
										<RadioGroup
											row
											name="gender"
											value={gender}
											onChange={(e) => setGender(e.target.value)}
											style={{ marginLeft: "4px" }}
										>
											<FormControlLabel
												value="Male"
												control={<Radio />}
												label="Male"
											/>
											<FormControlLabel
												value="Female"
												control={<Radio />}
												label="Female"
											/>
											<FormControlLabel
												value="Other"
												control={<Radio />}
												label="Other"
											/>
										</RadioGroup>
									</FormControl>
									<FormControl fullWidth sx={{ m: 1 }}>
										<FormLabel
											className={classes.textField}
											style={{ display: "flex" }}
										>
											Date of Birth *
										</FormLabel>
										<LocalizationProvider dateAdapter={AdapterDateFns}>
											<DatePicker
												disableFuture
												mask="__/__/____"
												openTo="year"
												views={["year", "month", "day"]}
												value={birthDate}
												onChange={(newValue) => {
													setDate(newValue);
												}}
												renderInput={(params) => <TextField {...params} />}
											/>
										</LocalizationProvider>
									</FormControl>
								</Stack>
							</FormControl>
							<Typography
								variant="body2"
								component="p"
								style={{ margin: "10px 10px 2px 10px", textAlign: "left" }}
							>
								Address:
							</Typography>

							<div style={{ marginBottom: "10" }}>
								<FormControl fullWidth sx={{ m: 1 }}>
									<TextField
										id="address"
										name="address"
										label="Floor/Apartment Name"
										className={classes.textField}
										onChange={(e) => setAddress(e.target.value)}
										value={address}
										fullWidth
										required
									/>
								</FormControl>
								<Stack direction="row">
									<FormControl fullWidth sx={{ m: 1 }}>
										<TextField
											id="locality"
											name="locality"
											label="Locality"
											className={classes.textField}
											onChange={(e) => setLocality(e.target.value)}
											value={locality}
											fullWidth
											required
										/>
									</FormControl>
									<FormControl fullWidth sx={{ my: 1, ml: 1 }}>
										<TextField
											id="street"
											name="street"
											label="Street"
											className={classes.textField}
											onChange={(e) => setStreet(e.target.value)}
											value={street}
											fullWidth
											required
										/>
									</FormControl>
								</Stack>
								<Stack direction="row">
									<FormControl fullWidth sx={{ m: 1 }}>
										<TextField
											id="zipCode"
											name="zip"
											label="Zip Code"
											className={classes.textField}
											onChange={(e) => setZip(e.target.value)}
											value={zip}
											type="number"
											fullWidth
											required
										/>
									</FormControl>
									<FormControl fullWidth sx={{ my: 1, ml: 1 }}>
										<TextField
											id="phoneNo"
											name="phoneNo"
											label="Contact Number"
											className={classes.textField}
											type="number"
											onChange={(e) => setPhone(e.target.value)}
											value={phone}
											fullWidth
											required
										/>
									</FormControl>
								</Stack>
							</div>
							<Stack
								direction="row"
								alignItems="center"
								divider={<Divider orientation="vertical" flexItem />}
								spacing={2}
								sx={{ my: 2 }}
							>
								<FormControl fullWidth sx={{ m: 1 }}>
									<Typography
										variant="body2"
										component="p"
										style={{ margin: "10px 10px 2px 10px" }}
										className={classes.alignLeft}
									>
										Upload PDF Proof:
									</Typography>
									<label
										htmlFor="contained-button-file"
										className={classes.alignLeft}
										style={{ marginLeft: "1em" }}
									>
										<input
											accept="application/pdf"
											id="contained-button-file"
											name="proof"
											multiple
											type="file"
											onChange={(e) => setProof(e.target.files)}
										/>
									</label>
								</FormControl>
								<FormControl fullWidth sx={{ m: 1 }}>
									<TextField
										id="password"
										name="password"
										type="password"
										label="Password"
										onChange={(e) => setPassword(e.target.value)}
										value={password}
										className={classes.textField}
										fullWidth
										required
									/>
								</FormControl>
							</Stack>
							<FormControl fullWidth sx={{ m: 1 }}>
								<Button
									variant="contained"
									color="success"
									className={classes.button}
									onClick={register}
								>
									Sign-up
								</Button>
							</FormControl>
						</form>
					</Paper>
				</Grid>
				<Grid item />
			</Grid>
		</div>
	);
}
