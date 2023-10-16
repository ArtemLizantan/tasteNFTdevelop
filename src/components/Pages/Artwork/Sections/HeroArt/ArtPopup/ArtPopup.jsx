import "./artpopup.scss";
const ArtPopup = (props) => {
  return (
    <div className="artpopup">
      <div className="artpopup__body">
        <button onClick={props.onClick} className="artpopup__close icon-close">{props.close}</button>
        <div className="artpopup__top">
          <h2 className="artpopup__title">{props.title}</h2>
        </div>
        <div className="artpopup__center">
          <form className="artpopup__form">
            <div className="artpopup__form-wrapper">
              <h4 className="artpopup__form-wrapper-title">Min.sum</h4>
              <div className="artpopup__form-info">
                <div className="artpopup__form-input-wrapper">
                  <input type="text" placeholder="Count" />
                  <span>{props.info}</span>
                </div>
                <div className="artpopup__form-price">(1308.54$)</div>
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

export default ArtPopup;
