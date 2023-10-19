import React, { useState } from "react";
import logo1 from "../../../../img/profile/swap/1.png";
import logo2 from "../../../../img/profile/swap/2.png";
import "./balancePopup.scss";
import ArtPopup from "../../Artwork/Sections/HeroArt/ArtPopup/ArtPopup";

import swap from "../../../../json/swap.json";

const BalancePopup = (props) => {
  const [currentChildPopup, setCurrentChildPopup] = useState("");

  return (
    <div className="balance">
      <div className="balance__body">
        <div className="balance__top">
          <h2 className="balance__title">Balance settings</h2>
          <button
            onClick={props.onClick}
            className="artpopup__close icon-close"
          >
            {props.close}
          </button>
        </div>
        <div className="balance__bottom">
          <BalanceItem
            setCurrentChildPopup={setCurrentChildPopup}
            logo={logo1}
            value="1.5M"
            swap={swap.firstSwap}
          />
          <BalanceItem
            setCurrentChildPopup={setCurrentChildPopup}
            logo={logo2}
            value="1.5M"
            swap={swap.secondSwap}
          />
        </div>
      </div>
      <ArtPopup
        onClose={() => setCurrentChildPopup("")}
        open={currentChildPopup === "withdraw"}
        title="Withdraw"
        button="Confirm"
        wrapperTitle={"You will get"}
        info={"TASTE"}
      />
      <ArtPopup
        onClose={() => setCurrentChildPopup("")}
        open={currentChildPopup === "swap_to_taste"}
        title="Swap to  TASTE"
        button="Swap"
        wrapperTitle={"You will get"}
        info={"BNB"}
      />
      <ArtPopup
        onClose={() => setCurrentChildPopup("")}
        open={currentChildPopup === "deposit"}
        title="Deposit to BNB"
        button="Deposit"
        wrapperTitle={"You will get"}
        info={"BNB"}
      />
      <ArtPopup
        onClose={() => setCurrentChildPopup("")}
        open={currentChildPopup === "swap_to_bnb"}
        title="Swap to BNB"
        button="Confirm"
        wrapperTitle={"You will get"}
        info={"BNB"}
      />
    </div>
  );
};

const BalanceItem = ({ logo, value, swap, setCurrentChildPopup }) => (
  <div className="balance__item">
    <div className="balance__item-top">
      {logo && <img src={logo} alt="logo" />}
      <span>{value}</span>
    </div>
    <div className="balance__item-bottom">
      {swap.map(({ name, value }, index) => {
        return (
          <button
            onClick={() => setCurrentChildPopup(value)}
            key={index}
            className="balance__button"
          >
            {name}
          </button>
        );
      })}
    </div>
  </div>
);

export default BalancePopup;
