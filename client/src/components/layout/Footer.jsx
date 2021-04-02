import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer p-4 text-center">
      Copyright &copy; {new Date().getFullYear()} Dev Connector
    </footer>
  );
};

export default Footer;
