import { loginUser } from "../service/userService";
import React, { Component } from "react";

class Login extends Component {
  state = {
    data: {
      email: "",
      password: "",
    },
  };

  handleChange = ({ target: input }) => {
    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data });
  };

  loginUser = async (e) => {
    e.preventDefault();

    const { data } = this.state;
    await loginUser(data.email, data.password);
    this.props.history.push("/home");
  };

  render() {
    const { email, password } = this.state.data;

    return (
      <div className="container">
        <div className="row">
          <br></br>
          <h1 className="text-center">User Login Form</h1>
          <br></br>
          <div className="card col-md-6 offset-md-3 offset-md-3">
            <div className="card-body">
              <form onSubmit={this.loginUser}>
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
                <br></br>
                <br></br>
                <input type="submit" value="Login" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
