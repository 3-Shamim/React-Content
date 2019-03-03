import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../../store/actions/authActions";

const SignInLink = props => {
  return (
    <React.Fragment>
      <li>
        <NavLink to="/">Dashboard</NavLink>
      </li>
      <li>
        <NavLink to="/add-product">Add Product</NavLink>
      </li>
      <li>
        <NavLink to="/product-list">Product List</NavLink>
      </li>
      <li>
        <button className="btn red ml-1" onClick={props.logout}>
          Log Out
        </button>
      </li>
    </React.Fragment>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(SignInLink);
