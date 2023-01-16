import React, { useState } from "react";
import data from "../data.json";
import comanderImage from "../assets/crew/image-douglas-hurley.png";
import Navigation from "../components/Navigation";

const Crew = () => {
  const [crewData, setCrewData] = useState(data.crew[0]);

  const commanderData = data.crew[0];
  const missionSpecialistData = data.crew[1];
  const pilotData = data.crew[2];
  const flightEngineerData = data.crew[3];

  const handleCommanderData = () => {
    setCrewData(commanderData);
  };
  const handleMissionSpecialistData = () => {
    setCrewData(missionSpecialistData);
  };
  const handlePilotData = () => {
    setCrewData(pilotData);
  };
  const handleFlightEngineerData = () => {
    setCrewData(flightEngineerData);
  };

  return (
    <div className="container">
      <div className="crew page_content-container">
        <Navigation />
        <h6 className="page_header">
          <span className="page-num_header">02 </span>Meet your crew
        </h6>
        <div className="crew-member">
          <div className="crew-text_container">
            <h4 className="crew-role">{crewData.role}</h4>
            <h3 className="crew-name">{crewData.name}</h3>
            <p className="bio crew-bio">{crewData.bio}</p>
          </div>
          <nav className="crew-nav">
            <ul className="crew-nav_list">
              <li
                onClick={handleCommanderData}
                className="crew-nav_item_active crew-nav_item"
              ></li>
              <li
                onClick={handleMissionSpecialistData}
                className="crew-nav_item"
              ></li>
              <li onClick={handlePilotData} className="crew-nav_item"></li>
              <li
                onClick={handleFlightEngineerData}
                className="crew-nav_item"
              ></li>
            </ul>
          </nav>
          <img src={comanderImage} alt="" className="crew-img" />
        </div>
      </div>
    </div>
  );
};

export default Crew;
