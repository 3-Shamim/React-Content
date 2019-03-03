import React from "react";
import { Link } from "react-router-dom";
import SignInLink from "./SignInLink";
import { connect } from "react-redux";

const Navbar = ({ isLoggedIn }) => {
  const nav = isLoggedIn ? (
    <nav className="blue">
      <div className="nav-wrapper container">
        <Link to="/" className="brand-logo">
          Logo
        </Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <SignInLink />
        </ul>
      </div>
    </nav>
  ) : null;

  return nav;
};

const mapStateToProps = state => {
  return {
    isLoggedIn: state.auth.isLoggedIn
  };
};

export default connect(mapStateToProps)(Navbar);
