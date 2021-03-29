import React from "react";
import "./footer.scss";

const Footer = () => (
  <footer class="footer bg-dark text-white p-4 text-center">
    Copyright &copy; {new Date().getFullYear()} Dev Connector
  </footer>
);

export default Footer;
