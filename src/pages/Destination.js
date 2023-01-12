import React from "react";
import data from "../data.json";
import moon from "../assets/destination/image-moon.png";
import DestinationNav from "../components/DestinationNav";
import Navigation from "../components/Navigation";

const Destination = () => {
  const moonData = data.destinations[0];
  console.log(moonData.images.png)

  return (
    <div className="container">
      <div className="destination page_content-container">
        <Navigation />
        <h6 className="page_header">
          <span className="page-num_header">01 </span>Pick your destination
        </h6>
        <img src={moon} alt="Moon" className="moon_img planet_img" />
        <div className="destination-moon__text_container planet__text_container">
          <ul className="destination-nav">
            <li className="destination-nav_item nav_item destination-nav_item__active">
              Moon
            </li>
            <li className="destination-nav_item nav_item">Mars</li>
            <li className="destination-nav_item nav_item">Europa</li>
            <li className="destination-nav_item nav_item">Titan</li>
          </ul>
          <h2 className="planet_header">{moonData.name}</h2>
          <p className="p-text p_planet">{moonData.description}</p>
          <hr className="planet_text_line" />
          <div className="planet-details">
            <div className="planet-details_containers planet-distance">
              <h6 className="planet-details_sub-header sub-h2">
                Avg. distance
              </h6>
              <h6 className="planet-details_info sub-h1">
                {moonData.distance}
              </h6>
            </div>
            <div className="planet-details_containers planet-travel-time">
              <h6 className="planet-details_sub-header sub-h2">
                Est. travel time
              </h6>
              <h6 className="planet-details_info sub-h1">{moonData.travel}</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
