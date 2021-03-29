import React from "react";
import "./app.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Navbar, Footer, Landing, Register, Login } from "./components";

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
