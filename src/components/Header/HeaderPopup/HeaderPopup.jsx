import "./headerPopup.scss";
import HeaderVideoItem from "./HeaderVideoItem/HeaderVideoItem";
import MainButton from "../../UI/MainButton/MainButton";
import { Link } from "react-router-dom";
const HeaderPopup = (props) => {
  return (
    <div className="header-popup">
      <button onClick={props.onClick} className="artpopup__close icon-close">
        {props.close}
      </button>
      <div className="header-popup__body">
        <div className="header-popup__top">
          <h2 className="header-popup__title">Connecting wallet</h2>
        </div>
        <div className="header-popup__bottom">
          <div className="header-popup__videos videos">
            <HeaderVideoItem text="Описание что нужно сделать" />
            <HeaderVideoItem text="Описание что нужно сделать" />
            <HeaderVideoItem text="Описание что нужно сделать" />
          </div>
          <Link to="/myProfile">
            <MainButton name="Connect wallet" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeaderPopup;
