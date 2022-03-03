import React, { Component } from "react";

export default class Register extends Component {
	constructor(props) {
		super(props);
		this.state = {
			userType: "",
			firstName: "",
			lastName: "",
			gender: "",
			dob: "",
			emailId: "",
			password: "",
			address: "",
			issues: "",
			upload: "",
		};
	}

	changeUserTypeHandler = (event) => {
		this.setState({ userType: event.target.value });
	};
	changeFirstNameHandler = (event) => {
		this.setState({ firstName: event.target.value });
	};

	changeLastNameHandler = (event) => {
		this.setState({ lastName: event.target.value });
	};

	changeGenderHandler = (event) => {
		this.setState({ gender: event.target.value });
	};

	changeDateHandler = (event) => {
		this.setState({ dob: event.target.value });
	};

	changeEmailIdHandler = (event) => {
		this.setState({ emailId: event.target.value });
	};

	changePasswordHandler = (event) => {
		this.setState({ password: event.target.value });
	};

	changeAddressHandler = (event) => {
		this.setState({ address: event.target.value });
	};

	changeIssuesHandler = (event) => {
		this.setState({ issues: event.target.value });
	};

	addUploadHandler = (event) => {
		this.setState({ upload: event.target.value });
	};

	async registerUser(event) {
		event.preventDefault();

		let user = {
			userType: this.state.userType,
			firstName: this.state.firstName,
			lastName: this.state.lastName,
			gender: this.state.gender,
			dob: this.state.dob,
			emailId: this.state.emailId,
			password: this.state.password,
			address: this.state.address,
			issues: this.state.issues,
			upload: this.state.upload,
		};
		const response = await fetch("http://localhost:5000/api/register", {
			method: "POST",
			headers: {
				"Content-Type": "application/JSON",
			},
			body: JSON.stringify({ user }),
		});
		const data = await response.json();

		console.log(data);
	}

	render() {
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
									<div
										className="form-group"
										onChange={this.changeUserTypeHandler}
									>
										<label>Register as:</label>
										<input type="radio" value="Member" name="userType" /> Member
										<input
											type="radio"
											value="Caregiver"
											name="userType"
										/>{" "}
										Caregiver
										<input type="radio" value="Partner" name="userType" />{" "}
										Partner
										<input
											type="radio"
											value="Volunteer"
											name="userType"
										/>{" "}
										Volunteer
									</div>
									<div className="form-group">
										<label>First Name:</label>
										<input
											placeholder="First Name"
											name="firstName"
											className="form-control"
											value={this.state.firstName}
											onChange={this.changeFirstNameHandler}
										/>
									</div>
									<div className="form-group">
										<label>Last Name:</label>
										<input
											placeholder="Last Name"
											name="lastName"
											className="form-control"
											value={this.state.lastName}
											onChange={this.changeLastNameHandler}
										/>
									</div>
									<div
										className="form-group"
										onChange={this.changeGenderHandler}
									>
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
											name="dob"
											className="form-control"
											value={this.state.dob}
											onChange={this.changeDateHandler}
										/>
									</div>
									<div className="form-group">
										<label>Email:</label>
										<input
											placeholder="Email"
											type="email"
											name="emailId"
											className="form-control"
											value={this.state.emailId}
											onChange={this.changeEmailIdHandler}
										/>
									</div>
									<div className="form-group">
										<label>Password:</label>
										<input
											placeholder="Password"
											type="password"
											name="password"
											className="form-control"
											value={this.state.password}
											onChange={this.changePasswordHandler}
										/>
									</div>
									<div className="form-group">
										<label>Address:</label>
										<input
											placeholder="Address"
											name="address"
											className="form-control"
											value={this.state.address}
											onChange={this.changeAddressHandler}
										/>
									</div>
									<div className="form-group">
										<label>Issues:</label>
										<input
											placeholder="Issues"
											name="issues"
											className="form-control"
											value={this.state.issues}
											onChange={this.changeIssuesHandler}
										/>
									</div>
									<div className="form-group">
										<label>Upload:</label>
										<input
											placeholder="Upload File"
											type="file"
											name="file"
											className="form-control"
											value={this.state.upload}
											onChange={this.addUploadHandler}
										/>
									</div>
									<br></br>
									<br></br>
									<button className="btn btn-success" type="submit">
										Register
									</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
