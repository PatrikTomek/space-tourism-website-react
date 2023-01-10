import React from "react";

const Navigation = () => {
  return (
    <div className="nav_container">
      <div className="logo">
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48">
          <g fill="none" fill-rule="evenodd">
            <circle cx="24" cy="24" r="24" fill="#FFF" />
            <path
              fill="#0B0D17"
              d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"
            />
          </g>
        </svg>
      </div>
      <div className="nav-line"></div>
      <nav className="main-nav">
        <ul className="main-nav_list">
          <li className="main-nav_item nav_item">
            <span className="main-nav_span">00</span>Home
          </li>
          <li className="main-nav_item nav_item main-nav_item__active">
            <span className="main-nav_span">01</span>Destination
          </li>
          <li className="main-nav_item nav_item">
            <span className="main-nav_span">02</span>Crew
          </li>
          <li className="main-nav_item nav_item">
            <span className="main-nav_span">03</span>Technology
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
