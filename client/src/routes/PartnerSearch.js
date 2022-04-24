import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
	Container,
	FormControl,
	Grid,
	TextField,
	Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { getAllPartners, searchByStreet } from "../redux/action/partnerAction";
import PartnerCard from "../components/PartnerCard";

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

const PartnerSearch = () => {
	const [search, setSearch] = useState("");
	const { partners } = useSelector((state) => state.getAllPartnersReducer);
	console.log(partners);
	const dispatch = useDispatch();

	// const filterPartners = () => {
	// 	let filter = partnersList;

	// 	if (input1) {
	// 		filter = partnersList.filter()
	// 	}
	// };

	useEffect(() => {
		if (search) return dispatch(searchByStreet(search));

		dispatch(getAllPartners());
	}, [dispatch, search]);

	const classes = useStyles();
	return (
		<div>
			<Container maxWidth="xl">
				<Typography variant="h4" align="center" component="h4">
					Search for Restaurants
				</Typography>
				<FormControl fullWidth sx={{ m: 2 }}>
					<TextField
						name="partnerName"
						placeholder="Search by restaurant names, street"
						onChange={(e) => setSearch(e.target.value)}
						value={search}
						className={classes.textField}
						fullWidth
					/>
				</FormControl>
				<Grid
					container
					spacing={2}
					direction="row"
					justifyContent="center"
					alignItems="center"
				>
					{partners.map((partner) => (
						<Grid item xs={6} md={3} key={partner._id}>
							<PartnerCard partner={partner} />
						</Grid>
					))}
				</Grid>
			</Container>
		</div>
	);
};

export default PartnerSearch;
