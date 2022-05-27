import React, { useEffect } from "react";
import { Restaurant, DeliveryDining, Person } from "@mui/icons-material";
import { Link, Outlet } from "react-router-dom";
import {
	Box,
	Grid,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Typography,
} from "@mui/material";
import { useSelector } from "react-redux";

const AdminScreen = () => {
	const userState = useSelector((state) => state.loginReducer);
	const { currentUser } = userState;
	useEffect(() => {
		if (
			localStorage.getItem("currentUser") === null ||
			!currentUser.user.isAdmin
		) {
			window.location.href = "/";
		}
	}, [currentUser]);

	return (
		<div>
			<Typography textAlign="center" variant="h3">
				Admin Panel
			</Typography>
			<Grid container>
				<Grid item xs={12} md={3} justifySelf="flex-start">
					<Box
						sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
					>
						<nav aria-label="main mailbox folders">
							<List>
								<ListItem disablePadding>
									<ListItemButton component={Link} to={`/admin/userdashboard`}>
										<ListItemIcon>
											<Person />
										</ListItemIcon>
										<ListItemText primary="User Dashboard" />
									</ListItemButton>
								</ListItem>
								<ListItem disablePadding>
									<ListItemButton
										component={Link}
										to={`/admin/partnerdashboard`}
									>
										<ListItemIcon>
											<Restaurant />
										</ListItemIcon>
										<ListItemText primary="Partner Dashboard" />
									</ListItemButton>
								</ListItem>
								<ListItem disablePadding>
									<ListItemButton component={Link} to={`/admin/orderdashboard`}>
										<ListItemIcon>
											<DeliveryDining />
										</ListItemIcon>
										<ListItemText primary="Order Dashboard" />
									</ListItemButton>
								</ListItem>
							</List>
						</nav>
					</Box>
				</Grid>
				<Grid item xs={12} md={5} justifySelf="center">
					<Box>
						<Outlet />
					</Box>
				</Grid>
			</Grid>
		</div>
	);
};

export default AdminScreen;
