import React from "react";
import "./navigation.css"; // Import the CSS file for styling

export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-content">
          <div className="navbar-left">
            <img
              src="img/buttons/logo.png"
              alt="Logo"
              className="logo"
            />
            <a href="http://localhost:3000" className="nav-link">Incubators</a>
            <a href="http://localhost:3000" className="nav-link">VC</a>
            <a href="http://localhost:3000" className="nav-link">Platform</a>
            <a href="http://localhost:3000" className="nav-link">Outreach</a>
          </div>
          <div className="navbar-right">
            <img
              src="img/buttons/darklight.png"
              alt="Darklight Mode"
              className="icon"
            />
            <img
              src="img/buttons/menu.png"
              alt="Menu"
              className="icon"
            />
            <button className="btn btn-default">Get in Touch</button>
          </div>
        </div>
      </div>
    </nav>
  );
};
