import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  if (localStorage.jwtToken) {
    window.location.href = "/dashboard";
  }
  return (
    <header className="landing">
      <div className="dark-overlay landing-inner text-light">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h1 className="display-3 mb-4 text-dark">
                Connecting Developers
              </h1>
              <p className="lead text-dark">
                {" "}
                Create a developer profile/portfolio, share posts and connect to
                other developers.
              </p>
              <hr />
              <Link to="/register" className="btn btn-lg btn-info mr-2">
                Sign Up
              </Link>
              <Link to="/login" className="btn btn-lg btn-light">
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Landing;
