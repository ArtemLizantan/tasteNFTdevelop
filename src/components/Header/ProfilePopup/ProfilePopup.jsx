import "./profilePopup.scss";

const ProfilePopup = (props) => {
  return (
    <div className="profile-popup">
      <div className="profile-popup__body">
        <div className="profile-popup__item">
          <span>Adress: </span>
          <span>0c0xcx1cx606g4516x51g1...</span>
        </div>
        <div className="profile-popup__item">
          <button onClick={props.onClick}>My profile</button>
        </div>
        <div className="profile-popup__item">
          <button onClick={props.onClickBalance}>Balance settings</button>
        </div>
        <div className="profile-popup__item">
          <button className="profile-popup__logout">Log out</button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePopup;
