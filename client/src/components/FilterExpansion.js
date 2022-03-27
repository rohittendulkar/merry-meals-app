import React from "react";
import makeStyles from '@mui/styles/makeStyles';
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  spaceTypo: {
    display: "flex",
    justifyContent: "space-between",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  ...theme.spreadThis,
}));

export default function SimpleExpansionPanel(props) {
  const classes = useStyles();
  let items;
  let totalPrice = 0;
  if (props.condition === "Orders") {
    items = props.items;
    items.forEach((item) => {
      totalPrice = totalPrice + item.quantity * item.item.price;
    });
  }

  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          className={classes.backgroundColorChange}
        >
          <Typography className={classes.heading}>
            {props.condition === "Orders" && "Order Summary"}
          </Typography>
        </AccordionSummary>
        <AccordionDetails
          style={{ display: "flex", flexDirection: "column" }}
        >
          {props.condition === "Orders" && (
            <>
              {items.map((item) => {
                return (
                  <Typography
                    variant="body2"
                    color="textPrimary"
                    key={item.item._id}
                  >
                    <div className={classes.spaceTypo}>
                      <span>{item.item.title}</span>
                      <span>
                        Rs.
                        {item.item.price} x {item.quantity}
                      </span>
                    </div>
                    <br />
                  </Typography>
                );
              })}
              <Typography variant="h5" className={classes.heading}>
                Total Amount - {totalPrice}
              </Typography>
            </>
          )}
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
