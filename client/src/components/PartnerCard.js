import {
	Card,
	CardActionArea,
	CardContent,
	CardMedia,
	Typography,
} from "@mui/material";
import React from "react";

const PartnerCard = ({ partner }) => {
	return (
		<Card sx={{ maxWidth: 345 }}>
			<CardActionArea>
				<CardMedia
					component="img"
					height="200"
					image={partner.imageUrl}
					alt="green iguana"
				/>
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
