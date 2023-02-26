import React from "react";
import "../scss/navBar.scss";

function NavBar() {
  return (
    <body className="main">
      <nav className="nav">
        <a href="./" className="logo">
          eduLearn
        </a>
        <ul>
          <li>
            <a href="" className="header">
              Home
            </a>
          </li>
          <li>
            <a href="" className="header">
              About
            </a>
          </li>
          <li>
            <a href="" className="header">
              Courses
            </a>
          </li>
          <li>
            <a href="" className="header">
              Prices
            </a>
          </li>
        </ul>

        <a href="" className="login-button">
          Login
        </a>
      </nav>
    </body>
  );
}

export default NavBar;
