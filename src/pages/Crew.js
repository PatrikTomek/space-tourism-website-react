import React, { useState } from "react";
import data from "../data.json";
import commanderImg from "../assets/crew/image-douglas-hurley.png";
import missionSpecialistImg from "../assets/crew/image-mark-shuttleworth.png";
import pilotImg from "../assets/crew/image-victor-glover.png";
import flightEngineerImg from "../assets/crew/image-anousheh-ansari.png";
import Navigation from "../components/Navigation";

const Crew = () => {
  const [crewData, setCrewData] = useState(data.crew[0]);
  const [crewImg, setCrewImg] = useState(commanderImg);
  const [toggleCrewTab, setToggleCrewTab] = useState(0);

  const commanderData = data.crew[0];
  const missionSpecialistData = data.crew[1];
  const pilotData = data.crew[2];
  const flightEngineerData = data.crew[3];

  const handleCommanderData = (index) => {
    setCrewData(commanderData);
    setCrewImg(commanderImg);
    setToggleCrewTab(index);
  };
  const handleMissionSpecialistData = (index) => {
    setCrewData(missionSpecialistData);
    setCrewImg(missionSpecialistImg);
    setToggleCrewTab(index);
  };
  const handlePilotData = (index) => {
    setCrewData(pilotData);
    setCrewImg(pilotImg);
    setToggleCrewTab(index);
  };
  const handleFlightEngineerData = (index) => {
    setCrewData(flightEngineerData);
    setCrewImg(flightEngineerImg);
    setToggleCrewTab(index);
  };

  return (
    <div className="crew_full-container container">
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
                onClick={() => handleCommanderData(0)}
                className={
                  toggleCrewTab === 0
                    ? "crew-nav_item_active crew-nav_item"
                    : "crew-nav_item"
                }
              ></li>
              <li
                onClick={() => handleMissionSpecialistData(1)}
                className={
                  toggleCrewTab === 1
                    ? "crew-nav_item_active crew-nav_item"
                    : "crew-nav_item"
                }
              ></li>
              <li
                onClick={() => handlePilotData(2)}
                className={
                  toggleCrewTab === 2
                    ? "crew-nav_item_active crew-nav_item"
                    : "crew-nav_item"
                }
              ></li>
              <li
                onClick={() => handleFlightEngineerData(3)}
                className={
                  toggleCrewTab === 3
                    ? "crew-nav_item_active crew-nav_item"
                    : "crew-nav_item"
                }
              ></li>
            </ul>
          </nav>
          <img src={crewImg} alt="" className="crew-img" />
        </div>
      </div>
    </div>
  );
};

export default Crew;
