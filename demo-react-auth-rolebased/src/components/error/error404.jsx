import React from "react";
import { connect } from "react-redux";

const ERROR404 = ({ isLoggedIn }) => {
  /* const errorView = isLoggedIn ? (
    <div className="card">
      <div className="card-content">
        <h3 className="center red-text">404</h3>
        <h5 className="center red-text">Page Not Found!</h5>
      </div>
    </div>
  ) : null; */

  // if (!isLoggedIn) return <Redirect to="/login" />;
  return (
    <div className="card">
      <div className="card-content">
        <h3 className="center red-text">404</h3>
        <h5 className="center red-text">Page Not Found!</h5>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isLoggedIn: state.auth.isLoggedIn
  };
};

export default connect(mapStateToProps)(ERROR404);
