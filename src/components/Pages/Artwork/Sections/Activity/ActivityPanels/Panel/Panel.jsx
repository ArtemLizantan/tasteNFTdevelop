import "./panel.scss";
import logoSmall from "../../../../../../../img/hero/hero-icon.svg";
import { Link } from "react-router-dom";

const Panel = (props) => {
  return (
    <div className="panel">
      <div className="panel__body">
        <div className="panel__left panel-left">
          <img src={props.img} alt="" className="panel-left__img" />
          <div className="panel-left__text">
            <div className="panel-left__top">{props.text}</div>
            <div className="panel-left__bottom">{props.date}</div>
          </div>
        </div>
        <div className="panel__right panel-right">
          <div className="info__left-bottom">
            <img src={logoSmall} alt="" />
            <span>1,5M</span>
            <span>(1308.54$)</span>
          </div>
          <Link
            to={"/creator"}
            className="panel-right__button icon-link"
          ></Link>
        </div>
      </div>
    </div>
  );
};

export default Panel;
