import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import AuthLayout from "./components/default_layout/AuthLayout";
import SignInLayout from "./components/loggedin_layout/SignInLayout";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <AuthLayout />
          <SignInLayout />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
