import { Box, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import heroimg from "../images/undraw_breakfast_psiw.svg";

const useStyles = makeStyles((theme) => ({
	hero: {
		width: "100%",
	},
}));
const Home = () => {
	const classes = useStyles();
	return (
		<>
			<Grid container spacing={2} alignItems="center">
				<Grid item xs={12} md={6}>
					<Grid container direction="column" spacing={6}>
						<Grid item>
							<Typography color="error" variant="h1">
								Welcome to Merry Meals !
							</Typography>
						</Grid>
						<Grid item>
							<Typography color="error" variant="h4">
								A Meals on Wheels initiative to provide hot noon meals to
								unpriviledged individuals
							</Typography>
						</Grid>
					</Grid>
				</Grid>
				<Grid item xs={12} md={6}>
					<img src={heroimg} className={classes.hero} alt="hero-img" />
				</Grid>
			</Grid>
		</>
	);
};

export default Home;
