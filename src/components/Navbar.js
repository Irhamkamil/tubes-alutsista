import React from "react";
import logo from "../assets/logo.png";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <div class="navbar">
      <div class="container">
        <div>
          <img className="Logo" src={logo} alt="PT Techno Barokah Jaya" />
        </div>
        <nav>
          <ul>
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
          <div class="button">
            <a href="/" class="login">
              Login
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
