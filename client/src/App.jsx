import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { logoutUser, setCurrentUser } from "./store/actions/authActions";

import { Navbar, Footer, Landing, Register, Login } from "./components";
import "./app.scss";
import store from "./store/store";

const jwtTokenFromLocalStorage = localStorage.jwtToken;
if (jwtTokenFromLocalStorage) {
  setAuthToken(jwtTokenFromLocalStorage);

  const decoded = jwt_decode(jwtTokenFromLocalStorage);
  store.dispatch(setCurrentUser(decoded));

  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    store.dispatch(logoutUser());

    // TODO: Clear current profiles

    window.location.href = "/login";
  }
}

const App = () => {
  return (
    <div className="app">
      <Router>
        <Navbar />

        <Route exact path="/">
          <Landing />
        </Route>

        <div className="container">
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
        </div>

        <Footer />
      </Router>
    </div>
  );
};

export default App;
