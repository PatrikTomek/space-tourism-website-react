import React from "react";
import image from "../assets/technology/image-launch-vehicle-portrait.jpg"
import data from "../data.json";
import Navigation from "../components/Navigation";

const Technology = () => {
  const techData = data.technology[0];

  return (
    <div className="container">
      <div className="technology page_content-container">
        <Navigation />
        <h6 className="page_header">
          <span className="page-num_header">03 </span>Space launch 101
        </h6>
        <div className="tech-description_container">
          <nav className="tech-nav">
            <ul className="tech-nav_list">
              <li className="tech-nav_item tech-nav_item_active">
                <h4>1</h4>
              </li>
              <li className="tech-nav_item">
                <h4>2</h4>
              </li>
              <li className="tech-nav_item">
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
        <img src={techData.images.portrait} alt="" className="tech-img" />
      </div>
    </div>
  );
};

export default Technology;
