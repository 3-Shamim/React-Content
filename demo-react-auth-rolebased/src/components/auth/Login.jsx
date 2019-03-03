import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../../store/actions/authActions";

class Login extends Component {
  state = {
    username: "",
    password: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.login(this.state);
  };

  render() {
    const { loader, loginFailed, isLoggedIn } = this.props;

    const loginErr =
      loginFailed === true ? (
        <p className="center red-text">Username & Password Wrong!</p>
      ) : null;

    const preloader = loader ? (
      <div className="preloader-wrapper small active">
        <div className="spinner-layer spinner-blue-only">
          <div className="circle-clipper left">
            <div className="circle" />
          </div>
          <div className="gap-patch">
            <div className="circle" />
          </div>
          <div className="circle-clipper right">
            <div className="circle" />
          </div>
        </div>
      </div>
    ) : null;

    if (isLoggedIn) return <Redirect to="/" />;

    return (
      <div className="login">
        <div className="card">
          <div className="card-content">
            <h4 className="center">Login</h4>
            <form onSubmit={this.handleSubmit}>
              <div className="input-field">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  id="username"
                  onChange={this.handleChange}
                  value={this.state.username}
                  required
                />
              </div>
              <div className="input-field">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  onChange={this.handleChange}
                  value={this.state.password}
                  required
                />
              </div>
              <div className="card-action">
                <button className="btn btn-success">Login</button>
                {preloader}
              </div>
            </form>
            {loginErr}
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return state.auth;
};

const mapDispathcToProps = dispatch => {
  return {
    login: credential => dispatch(login(credential))
  };
};
export default connect(
  mapStateToProps,
  mapDispathcToProps
)(Login);
