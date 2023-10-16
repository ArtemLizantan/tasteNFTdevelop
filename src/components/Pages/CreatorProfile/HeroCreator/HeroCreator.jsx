import React from "react";
import HeroProfileTop from "./HeroProfileTop/HeroProfileTop";
import "./heroCreator.scss";
const HeroCreator = () => {
  return (
    <section className="creator-hero">
      <div className="container">
        <div className="creator-hero__wrapper">
          <HeroProfileTop />
          <div className="creator-hero__bottom"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroCreator;
