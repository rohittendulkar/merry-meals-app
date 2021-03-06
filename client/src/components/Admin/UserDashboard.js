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
import { deleteUserById, getAllUsers } from "../../redux/action/userAction";
import DeleteIcon from "@mui/icons-material/Delete";

const UserDashboard = () => {
	const { loading, users } = useSelector(
		(state) => state.getAllUsersReducer
	);

	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getAllUsers());
	}, [dispatch]);



	const deleteUser = (id) => {
		dispatch(deleteUserById(id));
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
							<TableCell align="center">Gender</TableCell>
							<TableCell align="center">Phone.no</TableCell>
							<TableCell align="center">Delete User</TableCell>
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

						{users &&
							users.map((user) => (
								<TableRow
									key={user._id}
									sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
								>
									<TableCell align="center">
										{user.firstName} {user.lastName}
									</TableCell>
									<TableCell align="center">{user.email}</TableCell>
									<TableCell align="center">{user.gender}</TableCell>
									<TableCell align="center">{user.phone}</TableCell>
									<TableCell align="center">
										<Button
											variant="outlined"
											startIcon={<DeleteIcon />}
											onClick={() => deleteUser(user._id)}
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

export default UserDashboard;
