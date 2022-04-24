import {
	Card,
	CardActionArea,
	CardContent,
	CardMedia,
	Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const PartnerCard = ({ partner }) => {
	const router = useNavigate();

	const link = () => {
		router(`/restaurants/meals/${partner._id}`);
	};

	return (
		<Card sx={{ maxWidth: 345 }}>
			<CardActionArea onClick={link}>
				<CardMedia component="img" height="200" image={partner.imageUrl} />
				<CardContent>
					<Typography gutterBottom variant="h5" component="div">
						{partner.partnerName}
					</Typography>
					<Typography variant="body2" color="text.secondary">
						{partner.tags}
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	);
};

export default PartnerCard;
