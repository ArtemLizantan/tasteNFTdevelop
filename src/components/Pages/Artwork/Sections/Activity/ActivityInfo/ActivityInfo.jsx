import "./activityInfo.scss";
import avatar from "../../../../../../img/hero/avatar.png";
import Links from "../../../../../UI/Links/Links";
import Title from "../../../../../UI/Title/Title";
const ActivityInfo = () => {
  return (
    <div className="hero__left activity-info__left">
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
        <div className="activity-info__copy">
          <span>Сopy:</span> 2 of 10
        </div>
        <p className="hero__text">
          <span> Description:</span> The iconic meme that became a viral
          Internet sensation and an indispensable part of the gachimuchi music
          genre. This was taken when I was very young and in my full
          "performance" attire. That part of me now "lives" on platforms like
          Twitch, YouTube, and Bilibili (B 站). The iconic meme that became a
          viral Internet sensation and an indispensable part of the gachimuchi
          music genre. This was taken when I was very young and in my full
          "performance" attire. That part of me now "lives" on platforms like
          Twitch, YouTube, and Bilibili (B 站).
        </p>
      </div>
      <div className="hero__bottom hero-bottom">
        <div className="hero-bottom__right">
          <div className="hero-bottom__left-links">
            <div className="hero-bottom__social">
              <Links />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityInfo;
