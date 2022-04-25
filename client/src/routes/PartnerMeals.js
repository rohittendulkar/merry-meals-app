import { Delete, Edit } from "@mui/icons-material";
import {
	Box,
	IconButton,
	Paper,
	Stack,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
} from "@mui/material";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getItemsByPartner } from "../redux/action/itemAction";

const PartnerMeals = () => {
	const { id } = useParams();
	const { items } = useSelector((state) => state.getitemReducer);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getItemsByPartner(id));
	}, [dispatch, id]);
	return (
		<>
			<TableContainer sx={{ width: "900px" }} component={Paper}>
				<Table aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell>Meal Items</TableCell>
							<TableCell align="center">Description</TableCell>
							<TableCell align="center">Category</TableCell>
							<TableCell align="center">Image Link</TableCell>
							<TableCell align="center">Actions</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{items.map((item) => (
							<TableRow
								key={item._id}
								sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
							>
								<TableCell component="th" scope="row">
									{item.title}
								</TableCell>
								<TableCell align="center">{item.description}</TableCell>
								<TableCell align="center">{item.category}</TableCell>
								<TableCell align="center">{item.imageUrl}</TableCell>
								<TableCell align="center">
									<Stack direction="row">
										<Box sx={{ mx: 2 }}>
											<IconButton size="large" sx={{ color: "#1D3557" }}>
												<Edit />
											</IconButton>
										</Box>

										<Box sx={{ mx: 2 }}>
											<IconButton size="large" color="error">
												<Delete />
											</IconButton>
										</Box>
									</Stack>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</>
	);
};

export default PartnerMeals;
