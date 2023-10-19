import "./artpopup.scss";
const ArtPopup = ({ onClose, close, info, button, title, open, wrapperTitle }) => {
  return (
    open && (
      <div className="artpopup">
        <div className="artpopup__body">
          <button  onClick={onClose} className="artpopup__close icon-close">
            {close}
          </button>
          <div className="artpopup__top">
            <h2 className="artpopup__title">{title}</h2>
          </div>
          <div className="artpopup__center">
            <form className="artpopup__form">
              <div className="artpopup__form-wrapper">
                <h4 className="artpopup__form-wrapper-title">{wrapperTitle}</h4>
                <div className="artpopup__form-info">
                  <div className="artpopup__form-input-wrapper">
                    <input type="text" placeholder="Count" />
                    <span>{info}</span>
                  </div>
                  <span className="artpopup__form-price">(1308.54$)</span>
                </div>
              </div>
              <button className="artpopup__form-btn" type="submit">
                {button}
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  );
};

export default ArtPopup;
