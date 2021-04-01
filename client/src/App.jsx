import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";

import {
  logoutUser,
  setCurrentUser,
  clearCurrentProfile,
} from "./store/actions";
import store from "./store/store";

import {
  Navbar,
  Footer,
  Landing,
  Register,
  Login,
  Dashboard,
  PrivateRoute,
  CreateProfile,
  EditProfile,
  AddExperience,
  AddEducation,
} from "./components";
import "./App.scss";

const jwtTokenFromLocalStorage = localStorage.jwtToken;
if (jwtTokenFromLocalStorage) {
  setAuthToken(jwtTokenFromLocalStorage);

  const decoded = jwt_decode(jwtTokenFromLocalStorage);
  store.dispatch(setCurrentUser(decoded));

  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    store.dispatch(logoutUser());
    store.dispatch(clearCurrentProfile());

    window.location.href = "/login";
  }
}

const App = () => {
  return (
    <div className="app">
      <Router>
        <Navbar />

        <Route exact path="/" component={Landing} />

        <div className="container">
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Switch>
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
          </Switch>
          <Switch>
            <PrivateRoute
              exact
              path="/create-profile"
              component={CreateProfile}
            />
          </Switch>
          <Switch>
            <PrivateRoute exact path="/edit-profile" component={EditProfile} />
          </Switch>
          <Switch>
            <PrivateRoute
              exact
              path="/add-experience"
              component={AddExperience}
            />
          </Switch>
          <Switch>
            <PrivateRoute
              exact
              path="/add-education"
              component={AddEducation}
            />
          </Switch>
        </div>

        <Footer />
      </Router>
    </div>
  );
};

export default App;
