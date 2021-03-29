import React from "react";
import "./app.scss";
import { Navbar, Footer, Landing } from "./components/layout";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Landing />
      <Footer />
    </div>
  );
};

export default App;
