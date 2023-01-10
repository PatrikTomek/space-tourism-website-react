import React from "react";
import moon from "../assets/destination/image-moon.png";
import DestinationNav from "../components/DestinationNav";
import Navigation from "../components/Navigation";

const DestinationMoon = () => {
  return (
    <div className="destination-moon container">
      <div className="page_content-container">
        <Navigation />
        <h6 className="page_header">
          <span className="page-num_header">01 </span>Pick your destination
        </h6>
        <img src={moon} alt="" className="moon_img planet_img" />
        <div className="destination-moon__text_container planet__text_container">
          <DestinationNav />
          <h2 className="planet_header">Moon</h2>
          <p className="p-text p_planet">
            See our planet as you’ve never seen it before. A perfect relaxing
            trip away to help regain perspective and come back refreshed. While
            you’re there, take in some history by visiting the Luna 2 and Apollo
            11 landing sites.
          </p>
          <hr className="planet_text_line" />
          <div className="planet-details">
            <div className="planet-details_containers planet-distance">
              <h6 className="planet-details_sub-header sub-h2">Avg. distance</h6>
              <h6 className="planet-details_info sub-h1">384,400 km</h6>
            </div>
            <div className="planet-details_containers planet-travel-time">
              <h6 className="planet-details_sub-header sub-h2">Est. travel time</h6>
              <h6 className="planet-details_info sub-h1">3 days</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationMoon;
