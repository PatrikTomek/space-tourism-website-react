import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="nav_container">
      <div className="logo">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="auto" viewBox="0 0 50 50">
          <g fill="none" fillRule="evenodd">
            <circle cx="24" cy="24" r="24" fill="#FFF" />
            <path
              fill="#0B0D17"
              d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"
            />
          </g>
        </svg>
      </div>
      <div className="nav-line"></div>
      <div className="nav_hamburger">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="21">
          <g fill="#D0D6F9" fillRule="evenodd">
            <path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z" />
          </g>
        </svg>
      </div>
      <nav className="main-nav">
        <ul className="main-nav_list">
          <NavLink to="/space-tourism-website-react/">
            <li className="main-nav-home main-nav_item nav_item">
              <span className="main-nav_span">00</span>Home
            </li>
          </NavLink>
          <NavLink
            to="/space-tourism-website-react/destination"
            className="main-nav_link"
          >
            <li className="main-nav_item nav_item">
              <span className="main-nav_span">01</span>Destination
            </li>
          </NavLink>
          <NavLink
            to="/space-tourism-website-react/crew"
            className="main-nav_link"
          >
            <li className="main-nav_item nav_item">
              <span className="main-nav_span">02</span>Crew
            </li>
          </NavLink>
          <NavLink
            to="/space-tourism-website-react/technology"
            className="main-nav_link"
          >
            <li className="main-nav_item nav_item">
              <span className="main-nav_span">03</span>Technology
            </li>
          </NavLink>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
