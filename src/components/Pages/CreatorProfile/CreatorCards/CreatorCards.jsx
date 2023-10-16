import React from "react";
import CardsAll from "../../Main/Sections/Cards/CardsAll/CardsAll";
import "./creatorCards.scss";
const CreatorCards = () => {
  return (
    <section className="creator-cards">
      <div className="container">
        <div className="creator-cards__sort">
          <button className="creator-cards__button _active">Created</button>
          <button className="creator-cards__button">Collected</button>
        </div>
        <CardsAll />
      </div>
    </section>
  );
};

export default CreatorCards;
