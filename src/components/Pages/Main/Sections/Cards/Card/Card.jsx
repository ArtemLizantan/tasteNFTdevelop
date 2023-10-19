import { useState } from "react";
import "./card.scss";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import CardsPopup from "../../../../MyProfile/MyProfileCards/CardsPopup/CardsPopup";
const Card = (props) => {
  const location = useLocation();
  const [cardsPopup, setCardsPopup] = useState(false);
  const [control, setControl] = useState(false);

  return (
    <article className="card">
      <div className="card__wrapper">
        <div className="card__top">
          <Link to={`/Artworks/${props.id}`}>
            <img className="card__top-img" src={props.img} alt="" />
          </Link>
          {location.pathname === "/myProfile" ? (
            <div className="card__profile card-profile">
              <div
                className="card-profile__left"
                style={{ color: props.color }}
              >
                {props.titleProfile}
              </div>
              <div className="card-profile__right">
                <button
                  onClick={() => setControl((control) => !control)}
                  className="card-profile__button icon-menu"
                ></button>
                {control && (
                  <ul className="card-profile__control">
                    <li className="card-profile__control-item ">
                      <button className="icon-clock"></button>
                    </li>
                    <li className="card-profile__control-item ">
                      <button
                        onClick={() => setCardsPopup(!false)}
                        className="icon-draw"
                      ></button>
                    </li>
                    <li className="card-profile__control-item ">
                      <button className="icon-delete"></button>
                    </li>
                  </ul>
                )}
              </div>
            </div>
          ) : (
            <div className="card__user">
              <img src={props.mainImg} alt="" className="card__user-img" />
              <div className="card__name">
                <h3 className="card__user-name">{props.userName}</h3>
                <p className="card__user-link">{props.userNameLink}</p>
              </div>
            </div>
          )}
        </div>
        {cardsPopup && (
          <CardsPopup
            title="Changing ending time"
            button="Change"
            hour="05h 02m 41s"
            wrapperTitle="Selling will end"
            onClick={() => setCardsPopup(false)}
          />
        )}

        <Link to={`/Artworks/${props.id}`}>
          <div className="card__bottom">
            <h2 className="card__title">{props.title}</h2>
            <div className="card__info-block">
              <div className="card__top-info">
                <div className="card__sold">Sold for:</div>
                <div className="card__soldest">
                  <img src={props.logo} alt="" /> <span>{props.count}</span>
                </div>
              </div>
              <div className="card__bottom-info">
                <div className="card__ending">Ending in:</div>
                <div className="card__time">{props.cardTime}</div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </article>
  );
};

export default Card;
