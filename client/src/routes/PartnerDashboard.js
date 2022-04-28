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
import { Fastfood, Restaurant, RestaurantMenu } from "@mui/icons-material";
import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const PartnerDashboard = () => {
	const { _id } = useSelector(
		(state) => state.loginReducer.currentUser.partner
	);

	return (
		<>
			<Typography
				textAlign="center"
				sx={{ textAlign: "left", m: 2 }}
				variant="h4"
			>
				Partner Dashboard
			</Typography>
			<Grid container>
				<Grid item xs={12} md={4} justifySelf="flex-start">
					<Box
						sx={{
							width: "100%",
							maxWidth: 360,
							bgcolor: "background.paper",
							m: 2,
						}}
					>
						<nav aria-label="main mailbox folders">
							<List>
								<ListItem disablePadding>
									<ListItemButton
										component={Link}
										to={`/dashboard/partner/meals/${_id}`}
									>
										<ListItemIcon>
											<RestaurantMenu />
										</ListItemIcon>
										<ListItemText primary="Meal Items" />
									</ListItemButton>
								</ListItem>
								<ListItem disablePadding>
									<ListItemButton
										component={Link}
										to="/dashboard/partner/addmeal"
									>
										<ListItemIcon>
											<Fastfood />
										</ListItemIcon>
										<ListItemText primary="Add New Meal" />
									</ListItemButton>
								</ListItem>
								<ListItem disablePadding>
									<ListItemButton
										component={Link}
										to={`/dashboard/partner/orders/${_id}`}
									>
										<ListItemIcon>
											<Restaurant />
										</ListItemIcon>
										<ListItemText primary="Orders" />
									</ListItemButton>
								</ListItem>
							</List>
						</nav>
					</Box>
				</Grid>
				<Grid item xs={12} md={6} justifySelf="center">
					<Box sx={{ mt: 4 }}>
						<Outlet />
					</Box>
				</Grid>
			</Grid>
		</>
	);
};

export default PartnerDashboard;
