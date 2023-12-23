import React from "react";
import "../styles/Footer.css";
import logo from "../assets/logo.png";

function Footer() {
  return (
    <footer>
      <ul className="navFooter">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <a href="/">Logistics</a>
        </li>
      </ul>
      <div>
        <img className="logoFooter" src={logo} alt="PT Techno Barokah Jaya" />
      </div>
      <div className="contactFooter">
        <p>© 2020 PT Techno Barokah Jaya</p>
      </div>
    </footer>
  );
}

export default Footer;
