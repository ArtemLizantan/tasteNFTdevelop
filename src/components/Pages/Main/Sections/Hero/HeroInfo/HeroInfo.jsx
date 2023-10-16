import avatar from "../../../../../../img/hero/avatar.png";
import logoSmall from "../../../../../../img/hero/hero-icon.svg";
import Links from "../../../../../UI/Links/Links";
import MainButton from "../../../../../UI/MainButton/MainButton";
import Title from "../../../../../UI/Title/Title";
import "./hero-info.scss";
const HeroInfo = () => {
  return (
    <div className="hero__left">
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
      <div className="hero__center">
        <Title title="WFH - art name" />
        <p className="hero__text">
          <span>Description: </span> The iconic meme that became a viral
          Internet sensation and an indispensable part of the gachimuchi music
          genre. This was taken when I was very young and in my full
          "performance" attire. That part of me now "lives" on platforms like
          Twitch, YouTube, and Bilibili (B 站).
        </p>
      </div>
      <div className="hero__bottom hero-bottom">
        <div className="hero-bottom__left">
          <div className="hero-bottom__left-info">
            <div className="hero-bottom__sold">Sold for:</div>
          </div>
          <div className="hero-bottom__soldest">
            <img src={logoSmall} alt="logo-small" />
            <span>1.5M</span>
          </div>
        </div>
        <div className="hero-bottom__right">
          <div className="hero-bottom__left-links">
            <MainButton name="View" main={!true} />
            <div className="hero-bottom__social">
              <Links />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroInfo;
