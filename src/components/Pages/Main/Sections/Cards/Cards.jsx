import Select from "./Select/Select";
import select from "../../../../../json/select.json";
import "./cards.scss";
import CardsAll from "./CardsAll/CardsAll";

const Cards = () => {
  return (
    <section className="cards">
      <div className="container">
        <div className="select__wrapper">
          <Select
            select={select.firstDropdownOptions}
            title={select.firstDropdownOptions[0]}
          />
          <Select
            select={select.secondDropdownOptions}
            title={select.secondDropdownOptions[0]}
          />
        </div>
        <CardsAll />
      </div>
    </section>
  );
};

export default Cards;
