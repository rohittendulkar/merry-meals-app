import {
	Button,
	Card,
	CardActionArea,
	CardActions,
	CardContent,
	CardMedia,
	Chip,
	FormControl,
	Grid,
	InputLabel,
	MenuItem,
	Select,
	Typography,
} from "@mui/material";
import React, { useState } from "react";

const MealCard = ({ item }) => {
	const [qty, setQty] = useState(1);
	return (
		<>
			<Card sx={{ maxWidth: 345 }}>
				<CardActionArea>
					<CardMedia
						component="img"
						height="140"
						image={item.imageUrl}
						alt={item.title}
					/>
					<CardContent>
						<Typography gutterBottom variant="h5" component="div">
							{item.title}
						</Typography>
						<Typography variant="body2" color="text.secondary">
							{item.description}
						</Typography>
						<Grid
							container
							spacing={3}
							sx={{ mt: 2 }}
							justifyContent="space-around"
							alignItems="center"
						>
							<Grid item>
								<Chip label={item.category} />
							</Grid>
							<Grid item>
								<FormControl sx={{ m: 1, minWidth: 80 }} size="small">
									<InputLabel id="demo-simple-select-autowidth-label">
										Qty
									</InputLabel>
									<Select
										labelId="demo-simple-select-autowidth-label"
										id="demo-simple-select-autowidth"
										value={qty}
										onChange={(e) => setQty(e.target.value)}
										autoWidth
										label="Qty"
									>
										{[...Array(5).keys()].map((val, i) => (
											<MenuItem sx={{ mx: 2 }} value={i + 1}>
												{i + 1}
											</MenuItem>
										))}
									</Select>
								</FormControl>
							</Grid>
						</Grid>
					</CardContent>
				</CardActionArea>
				<CardActions>
					<Button size="small" color="primary">
						Add to Cart
					</Button>
				</CardActions>
			</Card>
		</>
	);
};

export default MealCard;
