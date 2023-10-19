import React from "react";
import avatar from "../../../../../img/hero/avatar.png";
import MainButton from "../../../../UI/MainButton/MainButton";
import Links from "../../../../UI/Links/Links";

import "./heroProfileTop.scss";
import { useLocation } from "react-router-dom";
const HeroProfileTop = () => {
  const location = useLocation();

  return (
    <div className="hero-profile-top">
      <div className="hero-profile-top__wrapper">
        <div className="hero-profile-top__left">
          <div className="hero-profile-top__left-top">
            <div className="hero__top hero-top">
              <div className="hero-top__left">
                <img src={avatar} alt="avatar" />
              </div>
              <div className="hero-top__right">
                <h3 className="hero-top__username">User Name</h3>
                <a href="#!" className="hero-top__right-link">
                  @username
                </a>
              </div>
            </div>
          </div>
          <div className="hero-profile-top__left-bottom profile-icons">
            <div className="profile-icons__wrapper">
              <ul className="profile-icons__list">
                <li className="profile-icons__item icon-twitch"><a href="/">Twitch</a></li>
                <li className="profile-icons__item icon-insta"><a href="/">Instagram</a></li>
                <li className="profile-icons__item icon-twitter"><a href="/">Twitter</a></li>
                <li className="profile-icons__item icon-onlyfans"><a href="/">Onlyfans</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="hero-profile-top__right">
          <div className="hero-profile-top__wrapper-top">
            <div className="hero-profile-top__info">
              <div className="hero-profile-top__item">
                <span>234</span> <span>Followers</span>
              </div>
              <div className="hero-profile-top__item">
                <span>15</span> <span>Following</span>
              </div>
            </div>
            <div className="hero-bottom__right">
              <div className="hero-bottom__left-links">
                {location.pathname === "/myProfile" ? null : (
                  <MainButton name="Follow" main={!true} />
                )}
                <div className="hero-bottom__social">
                  <Links />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-profile-top__desc">
        <span>Description:</span> The iconic meme that became a viral Internet
        sensation and an indispensable part of the gachimuchi music genre. This
        was taken when I was very young and in my full "performance" attire.
        That part of me now "lives" on platforms like Twitch, YouTube, and
        Bilibili (B 站). The iconic meme that became a viral Internet sensation
        and an indispensable part of the gachimuchi music genre. This was taken
        when I was very young and in my full "performance" attire. That part of
        me now "lives" on platforms like Twitch, YouTube, and Bilibili (B 站).
      </div>
    </div>
  );
};

export default HeroProfileTop;
