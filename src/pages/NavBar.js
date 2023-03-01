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
          <a href="" className="header">
            Home
          </a>

          <a href="" className="header">
            About
          </a>

          <a href="" className="header">
            Courses
          </a>

          <a href="" className="header">
            Prices
          </a>
        </ul>

        <div>
          <a href="" className="login-button">
            Login
          </a>
        </div>
      </nav>
    </body>
  );
}

export default NavBar;
