import React from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Dashboard from "../dashboard/Dashboard";
import AddProduct from "../products/AddProduct";
import ProductList from "../products/ProductList";

const SignInLayout = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/add-product" component={AddProduct} />
        <Route path="/product-list" component={ProductList} />
      </Switch>
    </React.Fragment>
  );
};

export default SignInLayout;
