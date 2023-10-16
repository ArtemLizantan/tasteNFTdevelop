import React, { useState } from "react";
import MainButton from "../../../../UI/MainButton/MainButton";
import img1 from "../../../../../img//artworks/artowork.jpg";
import logoSmall from "../../../../../img/hero/hero-icon.svg";
import "./heroart.scss";
import ArtPopup from "./ArtPopup/ArtPopup";
const HeroArt = (props) => {
  const [open, setOpen] = useState(false);
  return (
    <section className="hero-art">
      <div className="hero-art__wrapper">
        <div className="container">
          <div className="hero-art__body">
            <img src={img1} alt="" className="hero-art__img" />
            <div className="hero-art__info info">
              <div className="info__left">
                <div className="info__left-top">Current Bid:</div>
                <div className="info__left-bottom">
                  <img src={logoSmall} alt="" />
                  <span>1,5M</span>
                  <span>(1308.54$)</span>
                </div>
              </div>
              <div className="info__center">
                <div className="info__center-top">Auction ending in:</div>
                <div className="info__center-bottom">
                  <span>
                    1<span className="info__time">h</span> 28
                    <span className="info__time">m</span> 32
                    <span className="info__time">s</span>
                  </span>
                </div>
              </div>
              <div className="info__right">
                <MainButton name="Place a bid" onClick={() => setOpen(!open)} />
              </div>
            </div>
          </div>
        </div>
      </div>
      {open && <ArtPopup title="Place a bid" button="Place" info="TASTE" onClick={() => setOpen(false)}/>}
    </section>
  );
};

export default HeroArt;
