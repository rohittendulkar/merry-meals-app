import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import {
	Button,
	FormControl,
	FormLabel,
	Grid,
	Paper,
	Stack,
	TextField,
	Typography,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { partnerAction } from "../redux/action/partnerAction";

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

export default function PartnerRegister() {
	const classes = useStyles();

	const [partnerName, setPartnerName] = useState("");
	const [tags, setTags] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [address, setAddress] = useState("");
	const [street, setStreet] = useState("");
	const [locality, setLocality] = useState("");
	const [zip, setZip] = useState("");
	const [pictures, setPictures] = useState({});
	const [phone, setPhone] = useState("");

	const dispatch = useDispatch();

	const register = async (e) => {
		e.preventDefault();
		let partner = new FormData();

		partner.append("partnerName", partnerName);
		partner.append("tags", tags);
		partner.append("email", email);
		partner.append("password", password);
		partner.append("address", address);
		partner.append("street", street);
		partner.append("locality", locality);
		partner.append("zip", zip);
		partner.append("phone", phone);
		for (let i = 0; i < pictures.length; i++) {
			partner.append("pictures", pictures[i]);
		}

		// let partner = {
		//   partnerName,
		//   tags,
		//   email,
		//   password,
		//   address,
		//   street,
		//   locality,
		//   zip,
		//   pictures,
		//   phone,
		// };

		console.log(partner.get("pictures"));

		dispatch(partnerAction(partner));
	};

	return (
		<div style={{ display: "block" }}>
			<Grid container className={classes.form}>
				<Grid item xs={3} />
				<Grid item xs={7}>
					<Paper sx={{ pr: 2 }}>
						<Typography variant="h3" className={classes.title}>
							Register{" "}
						</Typography>
						<br />
						<form encType="multipart/form-data" noValidate>
							<FormControl fullWidth sx={{ m: 1 }}>
								<FormLabel
									className={classes.textField}
									style={{ display: "flex" }}
								>
									Partner Details
								</FormLabel>
								<TextField
									id="partnerName"
									name="partnerName"
									label="First Name"
									onChange={(e) => setPartnerName(e.target.value)}
									value={partnerName}
									className={classes.textField}
									fullWidth
									required
								/>
							</FormControl>
							<FormControl fullWidth sx={{ m: 1 }}>
								<TextField
									id="tags"
									name="tags"
									label="Tags"
									onChange={(e) => setTags(e.target.value)}
									value={tags}
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
								<TextField
									id="password"
									name="password"
									label="Password"
									onChange={(e) => setPassword(e.target.value)}
									value={password}
									className={classes.textField}
									fullWidth
									required
								/>
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
										multiple
										type="file"
										name="pictures"
										onChange={(e) => setPictures(e.target.files)}
									/>
								</label>
							</FormControl>
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
			</Grid>
		</div>
	);
}
