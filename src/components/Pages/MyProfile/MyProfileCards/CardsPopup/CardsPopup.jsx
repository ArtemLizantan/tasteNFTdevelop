import "./cardsPopup.scss";
const CardsPopup = (props) => {
  return (
    <div className="artpopup cards-popup">
      <div className="artpopup__body">
        <button onClick={props.onClick} className="artpopup__close icon-close">
          {props.close}
        </button>
        <div className="artpopup__top">
          <h2 className="artpopup__title">{props.title}</h2>
        </div>
        <div className="artpopup__center">
          <form className="artpopup__form">
            <div className="artpopup__form-wrapper">
              <h4 className="artpopup__form-wrapper-title">
                {props.wrapperTitle}
              </h4>
              <div className="artpopup__form-info">
                <div className="artpopup__form-input-wrapper cards-pop__big-input">
                  <input type="text" placeholder="22.02.2020" />
                </div>
                <div className="artpopup__form-input-wrapper  cards-pop__small-input">
                  <input type="text" placeholder="23:45" />
                </div>
                <div className="artpopup__form-price">{props.hour}</div>
                <button className="cards-pop__delete icon-close">delete file</button>
              </div>
            </div>
            <button className="artpopup__form-btn" type="submit">
              {props.button}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CardsPopup;
