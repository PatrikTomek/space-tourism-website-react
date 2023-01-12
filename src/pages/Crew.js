import React from "react";
import data from "../data.json";
import comanderImage from "../assets/crew/image-douglas-hurley.png";
import Navigation from "../components/Navigation";

const Crew = () => {
  const crewData = data.crew[0];

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
            <p className="crew-bio">{crewData.bio}</p>
          </div>
          <img src={comanderImage} alt="" className="crew-img" />
        </div>
      </div>
    </div>
  );
};

export default Crew;
