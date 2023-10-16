import React from "react";
import video from "../../../../img/video/video.jpg";
const HeaderVideoItem = (props) => {
  return (
    <div className="videos__item">
      <img src={video} alt="" />
      <span>{props.text}</span>
    </div>
  );
};

export default HeaderVideoItem;
