import { makeStyles } from "@mui/styles";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { loginAction } from "../redux/action/userAction";
import {
	Button,
	FormControl,
	Grid,
	Paper,
	TextField,
	Typography,
} from "@mui/material";

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

export default function Login() {
	const classes = useStyles();

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const dispatch = useDispatch();

	const loginUser = async (e) => {
		e.preventDefault();

		let user = { email, password };
		dispatch(loginAction(user));
	};

	return (
		<Grid container className={classes.form}>
			<Grid item xs={3} />
			<Grid item xs={6}>
				<Paper sx={{ pr: 2 }}>
					<Typography variant="h3" className={classes.title}>
						Log in
					</Typography>
					<br />
					<form noValidate>
						<FormControl fullWidth sx={{ m: 1 }}>
							<TextField
								id="email"
								name="firstName"
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
								type="password"
								onChange={(e) => setPassword(e.target.value)}
								value={password}
								className={classes.textField}
								fullWidth
								required
							/>
						</FormControl>
						<FormControl fullWidth sx={{ m: 1 }}>
							<Button
								variant="contained"
								color="success"
								className={classes.button}
								onClick={loginUser}
							>
								Login
							</Button>
						</FormControl>
					</form>
				</Paper>
			</Grid>
			<Grid item sm />
		</Grid>
	);
}
