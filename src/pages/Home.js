import React from "react";
import MainBtn from "../components/MainBtn";
import Navigation from "../components/Navigation";

const Home = () => {
  return (
    <div className="home_full-container container">
      <div className="home page_content-container">
        <Navigation />
        <div className="home_text_container">
          <h5>So, you want to travel to</h5>
          <h1>Space</h1>
          <p>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <MainBtn />
      </div>
    </div>
  );
};

export default Home;
