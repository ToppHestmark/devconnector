import React from "react";
import "./Footer.scss";

const Footer = () => (
  <footer className="footer bg-dark text-white p-4 text-center">
    Copyright &copy; {new Date().getFullYear()} Dev Connector
  </footer>
);

export default Footer;
