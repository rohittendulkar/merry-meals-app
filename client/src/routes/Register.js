import React, { Component } from "react";
import { registerUser } from "../service/userService";

export default class Register extends Component {
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
        issues: "",
        fileUpload: "",
      },
    };
  }

  handleChange = ({ target: input }) => {
    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data });
  };

  registerUser = async (e) => {
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
      issues,
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
      issues,
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
      email,
      password,
      address,
      issues,
      fileUpload,
    } = this.state.data;
    return (
      <div>
        <div className="container">
          <div className="row">
            <br></br>
            <h1 className="text-center">User Registration Form</h1>
            <br></br>
            <div className="card col-md-6 offset-md-3 offset-md-3">
              <div className="card-body">
                <form onSubmit={this.registerUser}>
                  <div className="form-group" onChange={this.handleChange}>
                    <label>Register as:</label>
                    <input type="radio" value="Member" name="userRole" /> Member
                    <input
                      type="radio"
                      value="Caregiver"
                      name="userRole"
                    />{" "}
                    Caregiver
                    <input type="radio" value="Partner" name="userRole" />{" "}
                    Partner
                    <input
                      type="radio"
                      value="Volunteer"
                      name="userRole"
                    />{" "}
                    Volunteer
                  </div>
                  <div className="form-group">
                    <label>First Name:</label>
                    <input
                      placeholder="First Name"
                      name="firstName"
                      className="form-control"
                      value={firstName}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Last Name:</label>
                    <input
                      placeholder="Last Name"
                      name="lastName"
                      className="form-control"
                      value={lastName}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-group" onChange={this.handleChange}>
                    <label>Gender:</label>
                    <input type="radio" value="Male" name="gender" /> Male
                    <input type="radio" value="Female" name="gender" /> Female
                    <input type="radio" value="Other" name="gender" /> Other
                  </div>
                  <div className="form-group">
                    <label>Date of Birth:</label>
                    <input
                      placeholder="Date of Birth"
                      type="date"
                      name="birthDate"
                      className="form-control"
                      value={birthDate}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Address:</label>
                    <input
                      placeholder="Address"
                      name="address"
                      className="form-control"
                      value={address}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Email:</label>
                    <input
                      placeholder="Email"
                      type="email"
                      name="email"
                      className="form-control"
                      value={email}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Password:</label>
                    <input
                      placeholder="Password"
                      type="password"
                      name="password"
                      className="form-control"
                      value={password}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Issues:</label>
                    <input
                      placeholder="Issues"
                      name="issues"
                      className="form-control"
                      value={issues}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Upload:</label>
                    <input
                      placeholder="Upload File"
                      type="file"
                      name="fileUpload"
                      className="form-control"
                      value={fileUpload}
                      onChange={this.handleChange}
                    />
                  </div>
                  <br></br>
                  <br></br>
                  <input type="submit" value="Register" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
