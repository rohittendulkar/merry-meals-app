import {
	Button,
	Paper,
	Skeleton,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
} from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	deletePartnerById,
	getAllPartners,
} from "../../redux/action/partnerAction";
import DeleteIcon from "@mui/icons-material/Delete";

const PartnerDashboard = () => {
	const { loading, partners } = useSelector(
		(state) => state.getAllPartnersReducer
	);

	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getAllPartners());
	}, [dispatch]);

	const deletePartner = (id) => {
		dispatch(deletePartnerById(id));
		window.location.reload();
	};

	return (
		<>
			<TableContainer sx={{ width: "950px" }} component={Paper}>
				<Table aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell align="center">Name</TableCell>
							<TableCell align="center">Email ID</TableCell>
							<TableCell align="center">Location</TableCell>
							<TableCell align="center">Phone.no</TableCell>
							<TableCell align="center">Delete Partner</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{loading && (
							<TableRow>
								<TableCell>
									<Skeleton animation="wave" />
								</TableCell>
								<TableCell>
									<Skeleton animation="wave" />
								</TableCell>
								<TableCell>
									<Skeleton animation="wave" />
								</TableCell>
								<TableCell>
									<Skeleton animation="wave" />
								</TableCell>
								<TableCell>
									<Skeleton animation="wave" />
								</TableCell>
								<TableCell>
									<Skeleton animation="wave" />
								</TableCell>
								<TableCell>
									<Skeleton animation="wave" />
								</TableCell>
							</TableRow>
						)}

						{partners &&
							partners.map((partner) => (
								<TableRow
									key={partner._id}
									sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
								>
									<TableCell align="center">{partner.partnerName}</TableCell>
									<TableCell align="center">{partner.email}</TableCell>
									<TableCell align="center">{partner.locality}</TableCell>
									<TableCell align="center">{partner.phone}</TableCell>
									<TableCell align="center">
										<Button
											variant="outlined"
											startIcon={<DeleteIcon />}
											onClick={() => deletePartner(partner._id)}
											color="error"
										>
											Delete
										</Button>
									</TableCell>
								</TableRow>
							))}
					</TableBody>
				</Table>
			</TableContainer>
		</>
	);
};

export default PartnerDashboard;
