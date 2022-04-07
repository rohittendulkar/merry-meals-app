import React, { Component } from "react";
import PropTypes from "prop-types";
import { registerUser } from "../service/userService";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { withStyles } from "@mui/styles";
import {
  Button,
  Divider,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Stack,
  TextField,
  Card,
  CardContent,
  Box,
  FormControl,
} from "@mui/material";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import AdapterDayjs from "@mui/lab/AdapterDayjs";
import DatePicker from "@mui/lab/DatePicker";

const styles = {
  title: {
    margin: "48px 0px 10px 0px",
  },
  alignLeft: {
    textAlign: "left",
  },
  paper: {
    padding: 2,
  },
};

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        userRole: "",
        firstName: "",
        lastName: "",
        gender: "",
        birthDate: "",
        email: "",
        password: "",
        address: "",
        street: "",
        locality: "",
        zip: "",
        phone: "",
        fileUpload: "",
      },
    };
  }

  handleInputChange = ({ target: input }) => {
    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data });
  };

  register = async (e) => {
    e.preventDefault();

    const {
      userRole,
      firstName,
      lastName,
      gender,
      birthDate,
      email,
      password,
      address,
      street,
      locality,
      zip,
      phone,
      fileUpload,
    } = this.state.data;

    let user = {
      userRole,
      firstName,
      lastName,
      gender,
      birthDate,
      email,
      password,
      address,
      street,
      locality,
      zip,
      phone,
      fileUpload,
    };
    console.log(user);
    const response = await registerUser(user);
    const data = response.data;
    console.log(data);
  };

  render() {
    const {
      firstName,
      lastName,
      birthDate,
      gender,
      email,
      password,
      address,
      street,
      locality,
      zip,
      phone,
      fileUpload,
    } = this.state.data;

    const { classes } = this.props;
    return (
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        <Box
          sx={{
            width: 500,
            height: 500,
          }}
        ></Box>
        <Box
          sx={{
            width: 800,
            height: 800,
          }}
        >
          <Card>
            <CardContent>
              <Grid item sm>
                <br />
                <Typography variant="h3" className={classes.title}>
                  Register{" "}
                  <span role="img" aria-label="Pizza Emoji">
                    🍕
                  </span>
                </Typography>
                <br />
                <form noValidate onSubmit={this.register}>
                  <FormControl fullWidth sx={{ m: 1 }}>
                    <TextField
                      id="firstName"
                      name="firstName"
                      label="First Name"
                      onChange={this.handleInputChange}
                      value={firstName}
                      className={classes.textField}
                      fullWidth
                      required
                    />
                  </FormControl>
                  <FormControl fullWidth sx={{ m: 1 }}>
                    <TextField
                      id="lastName"
                      name="lastName"
                      label="Last Name"
                      onChange={this.handleInputChange}
                      value={lastName}
                      className={classes.textField}
                      fullWidth
                      required
                    />
                  </FormControl>
                  <FormControl fullWidth sx={{ m: 1 }}>
                    <TextField
                      id="email"
                      name="email"
                      label="Email"
                      onChange={this.handleInputChange}
                      value={email}
                      className={classes.textField}
                      fullWidth
                      required
                    />
                  </FormControl>
                  <FormLabel
                    className={classes.textField}
                    style={{ display: "flex" }}
                  >
                    Gender
                  </FormLabel>
                  <Stack
                    direction="row"
                    alignItems="center"
                    divider={<Divider orientation="vertical" flexItem />}
                    spacing={2}
                  >
                    <RadioGroup
                      row
                      name="gender"
                      value={gender}
                      onChange={this.handleInputChange}
                      style={{ marginLeft: "4px" }}
                    >
                      <FormControlLabel
                        value="male"
                        control={<Radio />}
                        label="Male"
                      />
                      <FormControlLabel
                        value="female"
                        control={<Radio />}
                        label="Female"
                      />
                      <FormControlLabel
                        value="other"
                        control={<Radio />}
                        label="Other"
                      />
                    </RadioGroup>

                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DatePicker
                        // inputFormat="YYYY/MM/DD"
                        name="birthDate"
                        label="Birth Date"
                        value={birthDate}
                        onChange={this.handleInputChange}
                        renderInput={(params) => <TextField {...params} />}
                      />
                    </LocalizationProvider>
                  </Stack>
                  <Typography
                    variant="body2"
                    component="p"
                    style={{ margin: "10px 10px 2px 10px", textAlign: "left" }}
                  >
                    Address:
                  </Typography>
                  <div className={classes.address}>
                    <TextField
                      id="address"
                      name="address"
                      label="Floor/Apartment Name"
                      className={classes.textField}
                      onChange={this.handleInputChange}
                      value={address}
                      fullWidth
                      required
                    />
                    <TextField
                      id="locality"
                      name="locality"
                      label="Locality"
                      className={classes.textField}
                      onChange={this.handleInputChange}
                      value={locality}
                      fullWidth
                      required
                    />
                    <TextField
                      id="street"
                      name="street"
                      label="Street"
                      className={classes.textField}
                      onChange={this.handleInputChange}
                      value={street}
                      fullWidth
                      required
                    />
                    <TextField
                      id="zipCode"
                      name="zip"
                      label="Zip Code"
                      className={classes.textField}
                      onChange={this.handleInputChange}
                      value={zip}
                      type="number"
                      fullWidth
                      required
                    />
                    <TextField
                      id="phoneNo"
                      name="phoneNo"
                      label="Contact Number"
                      className={classes.textField}
                      type="number"
                      onChange={this.handleInputChange}
                      value={phone}
                      fullWidth
                      required
                    />
                  </div>
                  <Typography
                    variant="body2"
                    component="p"
                    style={{ margin: "10px 10px 2px 10px" }}
                    className={classes.alignLeft}
                  >
                    Upload PDF Proof:
                  </Typography>
                  <input
                    accept="application/pdf"
                    className={classes.uploadImages}
                    style={{ display: "flex" }}
                    id="raised-button-file"
                    multiple
                    type="file"
                    onChange={this.handleInputChange}
                  />

                  <TextField
                    id="password"
                    name="password"
                    type="password"
                    label="Password"
                    onChange={this.handleInputChange}
                    value={password}
                    className={classes.textField}
                    fullWidth
                    required
                  />

                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    className={classes.button}
                  >
                    Sign-up
                  </Button>
                </form>
              </Grid>
            </CardContent>
          </Card>
        </Box>
        <Box
          sx={{
            width: 500,
            height: 500,
          }}
        ></Box>
      </Box>
    );
  }
}

Register.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Register);
