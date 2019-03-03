import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "../auth/Login";

const AuthLayout = () => {
  return (
    <Switch>
      <Route path="/login" component={Login} />;
    </Switch>
  );
};

export default AuthLayout;
