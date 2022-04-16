import {
	Button,
	Card,
	CardActionArea,
	CardActions,
	CardContent,
	CardMedia,
	Typography,
} from "@mui/material";
import React from "react";

const MealCard = () => {
	return (
		<>
			<Card sx={{ maxWidth: 345 }}>
				<CardActionArea>
					<CardMedia
						component="img"
						height="140"
						image="https://maunikagowardhan.co.uk/wp-content/uploads/2012/08/Tandoori-Chicken1-1024x683.jpg"
						alt="green iguana"
					/>
					<CardContent>
						<Typography gutterBottom variant="h5" component="div">
							Menu Item
						</Typography>
						<Typography variant="body2" color="text.secondary">
							Lizards are a widespread group of squamate reptiles, with over
							6,000 species, ranging across all continents except Antarctica
						</Typography>
					</CardContent>
				</CardActionArea>
				<CardActions>
					<Button size="small" color="primary">
						Share
					</Button>
				</CardActions>
			</Card>
		</>
	);
};

export default MealCard;
