import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {
	Container,
	FormControl,
	Grid,
	TextField,
	Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { getAllPartners, searchPartners } from "../redux/action/partnerAction";

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
	const dispatch = useDispatch();

	// const filterPartners = () => {
	// 	let filter = partnersList;

	// 	if (input1) {
	// 		filter = partnersList.filter()
	// 	}
	// };

	useEffect(() => {
		if (search) return dispatch(searchPartners(search));

		dispatch(getAllPartners());
	}, [dispatch, search]);

	const classes = useStyles();
	return (
		<div>
			<Container maxWidth="xl">
				<Grid container spacing={2}>
					<Grid item xs={3}>
						<Paper variant="outlined" sx={{ p: 1 }}>
							<Typography variant="h4" className={classes.title}>
								Filter By
							</Typography>
							<FormControl fullWidth sx={{ mt: 2 }}>
								<TextField
									name="partnerName"
									label="Street"
									onChange={(e) => setSearch(e.target.value)}
									value={search}
									className={classes.textField}
									fullWidth
								/>
							</FormControl>
						</Paper>
					</Grid>
					<Grid item xs={9}>
						<TableContainer component={Paper}>
							<Table sx={{ minWidth: 650 }} aria-label="simple table">
								<TableHead>
									<TableRow>
										<TableCell>Partner Restaurant</TableCell>
										<TableCell align="right">Tags</TableCell>
										<TableCell align="right">Street</TableCell>
										<TableCell align="right">Locality</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									{partners.map((partner) => (
										<TableRow
											key={partner._id}
											sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
										>
											<TableCell component="th" scope="row">
												{partner.partnerName}
											</TableCell>
											<TableCell align="right">{partner.tags}</TableCell>
											<TableCell align="right">{partner.street}</TableCell>
											<TableCell align="right">{partner.locality}</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
						</TableContainer>
					</Grid>
				</Grid>
			</Container>
		</div>
	);
};

export default PartnerSearch;
