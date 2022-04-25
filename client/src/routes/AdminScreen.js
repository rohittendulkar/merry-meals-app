import React from "react";
import Box from "@mui/material/Box";
import ButtonGroup from "@mui/material/ButtonGroup";
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { Link, Outlet } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(0),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const AdminScreen = (history) => {
  return (
    <div>
      <h1 align="center"> Admin Panel</h1>
      <Box
        sx={{
          display: "flex",
          "& > *": {
            m: 1,
          },
        }}
      >
        <Grid item xs={3}>
          <Item>
            <ButtonGroup
              orientation="vertical"
              aria-label="vertical contained button group"
              variant="contained"
            >
              <Button
                component={Link}
                to="/admin/deliverydashboard"
                sx={{ height: 70, width: 300 }}
              >
                Delivery Dashboard
              </Button>
              <Button
                component={Link}
                to="/admin/foodsafetydashboard"
                sx={{ height: 70 }}
              >
                Food Safety Dashboard
              </Button>
              <Button
                component={Link}
                to="/admin/menudashboard"
                sx={{ height: 70 }}
              >
                Menu Dashboard
              </Button>
              <Button
                component={Link}
                to="/admin/userdashboard"
                sx={{ height: 70 }}
              >
                User Dashboard
              </Button>
            </ButtonGroup>
          </Item>
        </Grid>

        <Grid item xs={8}>
          <Item>
            <Outlet />
          </Item>
        </Grid>
        <Grid></Grid>
      </Box>
    </div>
  );
};

export default AdminScreen;
