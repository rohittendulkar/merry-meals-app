import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { useSelector } from "react-redux";
import logo from "../images/merrymeallogo.png";

// const pages = ["Home", "About", "Blog"];
// const settings = ["Register", "Login"];

const useStyles = makeStyles((theme) => ({
	AppBar: {
		marginBottom: "30px",
	},
}));

const ResponsiveAppBar = () => {
	const [anchorElNav, setAnchorElNav] = React.useState(null);
	const [anchorElUser, setAnchorElUser] = React.useState(null);

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};
	const handleOpenUserMenu = (event) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};

	const classes = useStyles();

	const userState = useSelector((state) => state.loginReducer);
	const { currentUser } = userState;

	return (
		<AppBar className={classes.AppBar} position="static">
			<Container maxWidth="xl">
				<Toolbar disableGutters>
					<Box
						component="img"
						sx={{
							height: 50,
							mr: 2,
							display: { xs: "none", md: "flex" },
						}}
						alt="Merry Meal Logo"
						src={logo}
					/>
					<Typography
						variant="h6"
						noWrap
						component="div"
						sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
					>
						Merry Meals
					</Typography>

					<Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
						<IconButton
							size="large"
							aria-label="account of current user"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							onClick={handleOpenNavMenu}
							color="inherit"
						>
							<MenuIcon />
						</IconButton>
						<Menu
							id="menu-appbar"
							anchorEl={anchorElNav}
							anchorOrigin={{
								vertical: "bottom",
								horizontal: "left",
							}}
							keepMounted
							transformOrigin={{
								vertical: "top",
								horizontal: "left",
							}}
							open={Boolean(anchorElNav)}
							onClose={handleCloseNavMenu}
							sx={{
								display: { xs: "block", md: "none" },
							}}
						>
							<MenuItem component={Link} to="/" onClick={handleCloseNavMenu}>
								<Typography textAlign="center">Home</Typography>
							</MenuItem>
							<MenuItem
								component={Link}
								to="/about"
								onClick={handleCloseNavMenu}
							>
								<Typography textAlign="center">About</Typography>
							</MenuItem>
							<MenuItem
								component={Link}
								to="/meals"
								onClick={handleCloseNavMenu}
							>
								<Typography textAlign="center">Meals</Typography>
							</MenuItem>
						</Menu>
					</Box>
					<Typography
						variant="h6"
						noWrap
						component="div"
						sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
					>
						Merry Meals
					</Typography>
					<Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
						<Button
							component={Link}
							to="/"
							onClick={handleCloseNavMenu}
							sx={{ my: 2, color: "white", display: "block" }}
						>
							Home
						</Button>
						<Button
							component={Link}
							to="/about"
							onClick={handleCloseNavMenu}
							sx={{ my: 2, color: "white", display: "block" }}
						>
							About
						</Button>
						<Button
							component={Link}
							to="/meals"
							onClick={handleCloseNavMenu}
							sx={{ my: 2, color: "white", display: "block" }}
						>
							Meals
						</Button>
					</Box>

					<Box sx={{ flexGrow: 0 }}>
						<Tooltip title="Open settings">
							<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
								<Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
							</IconButton>
						</Tooltip>

						{currentUser ? (
							<Menu
								sx={{ mt: "45px" }}
								id="menu-appbar"
								anchorEl={anchorElUser}
								anchorOrigin={{
									vertical: "top",
									horizontal: "right",
								}}
								keepMounted
								transformOrigin={{
									vertical: "top",
									horizontal: "right",
								}}
								open={Boolean(anchorElUser)}
								onClose={handleCloseUserMenu}
							>
								<MenuItem
									component={Link}
									to="/register/member"
									onClick={handleCloseUserMenu}
								>
									<Typography textAlign="center">
										{currentUser.user.firstName} {currentUser.user.lastName}
									</Typography>
								</MenuItem>
								<MenuItem
									component={Link}
									to="/login"
									onClick={handleCloseUserMenu}
								>
									<Typography textAlign="center">Logout</Typography>
								</MenuItem>{" "}
							</Menu>
						) : (
							<Menu
								sx={{ mt: "45px" }}
								id="menu-appbar"
								anchorEl={anchorElUser}
								anchorOrigin={{
									vertical: "top",
									horizontal: "right",
								}}
								keepMounted
								transformOrigin={{
									vertical: "top",
									horizontal: "right",
								}}
								open={Boolean(anchorElUser)}
								onClose={handleCloseUserMenu}
							>
								<MenuItem
									component={Link}
									to="/register/member"
									onClick={handleCloseUserMenu}
								>
									<Typography textAlign="center">Register</Typography>
								</MenuItem>
								<MenuItem
									component={Link}
									to="/login"
									onClick={handleCloseUserMenu}
								>
									<Typography textAlign="center">Login</Typography>
								</MenuItem>
							</Menu>
						)}
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
};
export default ResponsiveAppBar;
