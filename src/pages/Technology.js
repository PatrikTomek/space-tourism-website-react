import React, { useState } from "react";
import data from "../data.json";
import firstTechImg from "../assets/technology/image-launch-vehicle-portrait.jpg";
import secondTechImg from "../assets/technology/image-spaceport-portrait.jpg";
import thirdTechImg from "../assets/technology/image-space-capsule-portrait.jpg";
import Navigation from "../components/Navigation";

const Technology = () => {
  const [techData, setTechData] = useState(data.technology[0]);
  const [techImg, setTechImg] = useState(firstTechImg);

  const firstTechData = data.technology[0];
  const secondTechData = data.technology[1];
  const thirdTechData = data.technology[2];

  const handleFirstTechData = () => {
    setTechData(firstTechData);
    setTechImg(firstTechImg);
  };
  const handleSecondTechData = () => {
    setTechData(secondTechData);
    setTechImg(secondTechImg);
  };
  const handleThirdTechData = () => {
    setTechData(thirdTechData);
    setTechImg(thirdTechImg);
  };

  return (
    <div className="container">
      <div className="technology page_content-container">
        <Navigation />
        <h6 className="page_header">
          <span className="page-num_header">03 </span>Space launch 101
        </h6>
        <div className="tech-content_container">
          <div className="tech-description_container">
            <nav className="tech-nav">
              <ul className="tech-nav_list">
                <li
                  onClick={handleFirstTechData}
                  className="tech-nav_item tech-nav_item_active"
                >
                  <h4>1</h4>
                </li>
                <li onClick={handleSecondTechData} className="tech-nav_item">
                  <h4>2</h4>
                </li>
                <li onClick={handleThirdTechData} className="tech-nav_item">
                  <h4>3</h4>
                </li>
              </ul>
            </nav>
            <div className="technology-text_container">
              <h4 className="tech-intro nav-text">The terminology...</h4>
              <h3 className="tech-bio_header">{techData.name}</h3>
              <p className="bio tech-bio">{techData.description}</p>
            </div>
          </div>
          <img src={techImg} alt="" className="tech-img" />
        </div>
      </div>
    </div>
  );
};

export default Technology;
