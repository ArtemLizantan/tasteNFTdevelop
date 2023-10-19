import CardsAll from "../../Main/Sections/Cards/CardsAll/CardsAll";
import "./myProfileCards.scss";
const MyProfileCards = () => {
  return (
    <section className="profile-cards">
      <div className="container">
        <div className="creator-cards__sort">
          <button className="creator-cards__button _active">Created</button>
          <button className="creator-cards__button">Collected</button>
          <button className="creator-cards__button">Bids</button>
        </div>
        <CardsAll />
      </div>
    </section>
  );
};

export default MyProfileCards;
