import React, { useEffect, useState } from "react";
import { Alert, CircularProgress, Grid, Snackbar } from "@mui/material";
import { getItemsByPartner } from "../redux/action/itemAction";
import { useDispatch, useSelector } from "react-redux";
import MealCard from "../components/MealCard";
import { Box } from "@mui/system";
import { useParams } from "react-router-dom";

const Meal = () => {
	const dispatch = useDispatch();
	const { id } = useParams();
	const itemstate = useSelector((state) => state.getitemReducer);
	const { loading, items, error } = itemstate;
	useEffect(() => {
		dispatch(getItemsByPartner(id));
	}, [dispatch, id]);

	const [snackState, setsnackState] = useState({
		open: true,
		vertical: "top",
		horizontal: "left",
	});

	const { vertical, horizontal, open } = snackState;

	const handleClose = () => {
		setsnackState({ ...snackState, open: false });
	};

	return (
		<>
			<Grid container direction="column">
				{loading ? (
					<Box
						sx={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							marginTop: "1em",
						}}
					>
						<CircularProgress size={45} />
					</Box>
				) : error ? (
					<Snackbar
						anchorOrigin={{ vertical, horizontal }}
						open={open}
						autoHideDuration={6000}
						onClose={handleClose}
					>
						<Alert
							onClose={handleClose}
							severity="error"
							sx={{ width: "100%" }}
						>
							Error While Loading Meal Items.
						</Alert>
					</Snackbar>
				) : (
					<Grid
						spacing={2}
						container
						direction="row"
						justifyContent="center"
						alignItems="center"
					>
						{items.map((item) => (
							<Grid item key={item.title}>
								<MealCard item={item} />
							</Grid>
						))}
					</Grid>
				)}
			</Grid>
		</>
	);
};

export default Meal;
