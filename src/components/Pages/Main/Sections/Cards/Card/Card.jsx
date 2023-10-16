import "./card.scss";
import { Link } from "react-router-dom";
const Card = (props) => {
  return (
    <article className="card">
      <Link to={`/Artworks/${props.id}`}>
        <div className="card__wrapper">
          <div className="card__top">
            <img className="card__top-img" src={props.img} alt="" />
            <div className="card__user">
              <img src={props.mainImg} alt="" className="card__user-img" />
              <div className="card__name">
                <h3 className="card__user-name">{props.userName}</h3>
                <p className="card__user-link">{props.userNameLink}</p>
              </div>
            </div>
          </div>
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
        </div>
      </Link>
    </article>
  );
};

export default Card;
