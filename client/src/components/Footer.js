import { Box, Button, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
	bg: {
		marginTop: theme.spacing(20),
		backgroundColor: theme.palette.primary.main,
	},
	container: {
		backgroundColor: theme.palette.primary.main,
		marginTop: theme.spacing(20),
		paddingTop: theme.spacing(2),
		height: "42vh",
		textAlign: "center",
	},

	buttonStyleOne: {
		display: "block",
		color: "white",
		backgroundColor: theme.palette.primary.main,
		"&:hover": {
			backgroundColor: "#5a5c5a",
		},
	},
	buttonStyleTwo: {
		color: "white",
		backgroundColor: theme.palette.primary.main,
		marginLeft: 10,
		marginTop: 8,
		"&:hover": {
			backgroundColor: "#5a5c5a",
		},
	},
}));
export default function Footer() {
	const classes = useStyles();
	return (
		<Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
			<Grid
				xs={12}
				sx={{
					py: 3,
					px: 2,
					mt: "auto",
				}}
				container
				className={classes.container}
			>
				<Grid item xs={12} sm={12} md={3}>
					<Typography variant="h5" component="p">
						Partner With Merry Meals
					</Typography>
					<Button
						component={Link}
						to="/register/partner"
						className={classes.buttonStyleOne}
						sx={{
							my: 2,
							mx: 8,
							py: 2,
							color: "white",
							display: "block",
							backgroundColor: "secondary.main",
							"&:hover": {
								backgroundColor: "secondary.dark",
							},
						}}
					>
						Register Now
					</Button>
				</Grid>
				<Grid item xs={12} sm={12} md={3}>
					<Typography variant="h5" component="p">
						For You
					</Typography>
					<Typography variant="body1" component="p">
						<br />
						- Privacy <br />
						- Terms <br />
						- Security <br />
						- Sitemap <br />
						- Code of conduct <br />
					</Typography>
				</Grid>

				<Grid item xs={12} sm={12} md={3}>
					<Typography variant="h5" component="p">
						Resources/Stack Used
					</Typography>
					<Typography
						variant="body1"
						component="p"
						style={{ marginBottom: 28 }}
					>
						- React
						<br />
						- Material UI <br />
						- Redux <br />
						- NodeJs <br />
						- Express <br />
						- MongoDB Atlas <br />
					</Typography>
				</Grid>
				<Grid item xs={12} sm={12} md={3}>
					<Typography variant="h5" component="p">
						Project Made by:
					</Typography>
					<Typography
						variant="body1"
						component="p"
						style={{ marginBottom: 28 }}
					>
						- Rohit Tendulkar
						<br />
						- Akhil Gopakumar <br />
						- Shreyas Uttekar <br />
					</Typography>
				</Grid>
			</Grid>
		</Box>
	);
}
