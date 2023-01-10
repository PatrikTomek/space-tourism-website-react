import React from "react";

const DestinationNav = () => {
  return (
    <div>
      <ul className="destination-nav">
        <li className="destination-nav_item nav_item destination-nav_item__active">
          Moon
        </li>
        <li className="destination-nav_item nav_item">Mars</li>
        <li className="destination-nav_item nav_item">Europa</li>
        <li className="destination-nav_item nav_item">Titan</li>
      </ul>
    </div>
  );
};

export default DestinationNav;
