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

const PartnerDashboard = () => {
	return (
		<>
			<Typography textAlign="center" variant="h3">
				Partner Dashboard
			</Typography>
			<Grid container>
				<Grid item xs={12} md={4} justifySelf="flex-start">
					<Box
						sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
					>
						<nav aria-label="main mailbox folders">
							<List>
								<ListItem disablePadding>
									<ListItemButton
										component={Link}
										to="/dashboard/partner/meals"
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
										to="/dashboard/partner/orders"
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
					<Box>
						<Outlet />
					</Box>
				</Grid>
			</Grid>
		</>
	);
};

export default PartnerDashboard;
