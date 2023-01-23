import React, { useState } from "react";
import data from "../data.json";
import moonImg from "../assets/destination/image-moon.png";
import marsImg from "../assets/destination/image-mars.png";
import europaImg from "../assets/destination/image-europa.png";
import titanImg from "../assets/destination/image-titan.png";
import Navigation from "../components/Navigation";

const Destination = () => {
  const [destinationData, setDestinationData] = useState(data.destinations[0]);
  const [planetImg, setPlanetImg] = useState(moonImg);
  const [toggleDestTab, setToggleDestTab] = useState(0);

  const moonData = data.destinations[0];
  const marsData = data.destinations[1];
  const europaData = data.destinations[2];
  const titanData = data.destinations[3];

  const handleMoonData = (index) => {
    setDestinationData(moonData);
    setPlanetImg(moonImg);
    setToggleDestTab(index);
  };
  const handleMarsData = (index) => {
    setDestinationData(marsData);
    setPlanetImg(marsImg);
    setToggleDestTab(index);
  };
  const handleEuropaData = (index) => {
    setDestinationData(europaData);
    setPlanetImg(europaImg);
    setToggleDestTab(index);
  };
  const handleTitanData = (index) => {
    setDestinationData(titanData);
    setPlanetImg(titanImg);
    setToggleDestTab(index);
  };

  return (
    <div className="destination_full-container container">
      <div className="destination page_content-container">
        <Navigation />
        <h6 className="page_header">
          <span className="page-num_header">01 </span>Pick your destination
        </h6>
        <img src={planetImg} alt="Moon" className="moon_img planet_img" />
        <div className="destination-moon__text_container planet__text_container">
          <ul className="destination-nav">
            <li
              onClick={() => handleMoonData(0)}
              className={
                toggleDestTab === 0
                  ? "destination-nav_item nav_item destination-nav_item__active"
                  : "destination-nav_item nav_item"
              }
            >
              Moon
            </li>
            <li
              onClick={() => handleMarsData(1)}
              className={
                toggleDestTab === 1
                  ? "destination-nav_item nav_item destination-nav_item__active"
                  : "destination-nav_item nav_item"
              }
            >
              Mars
            </li>
            <li
              onClick={() => handleEuropaData(2)}
              className={
                toggleDestTab === 2
                  ? "destination-nav_item nav_item destination-nav_item__active"
                  : "destination-nav_item nav_item"
              }
            >
              Europa
            </li>
            <li
              onClick={() => handleTitanData(3)}
              className={
                toggleDestTab === 3
                  ? "destination-nav_item nav_item destination-nav_item__active"
                  : "destination-nav_item nav_item"
              }
            >
              Titan
            </li>
          </ul>
          <h2 className="planet_header">{destinationData.name}</h2>
          <p className="p-text p_planet">{destinationData.description}</p>
          <hr className="planet_text_line" />
          <div className="planet-details">
            <div className="planet-details_containers planet-distance">
              <h6 className="planet-details_sub-header sub-h2">
                Avg. distance
              </h6>
              <h6 className="planet-details_info sub-h1">
                {destinationData.distance}
              </h6>
            </div>
            <div className="planet-details_containers planet-travel-time">
              <h6 className="planet-details_sub-header sub-h2">
                Est. travel time
              </h6>
              <h6 className="planet-details_info sub-h1">
                {destinationData.travel}
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
