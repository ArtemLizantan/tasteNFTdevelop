import Card from "../Card/Card";
import card1 from "../../../../../../img/cards/1.png";
import card2 from "../../../../../../img/cards/2.png";
import card3 from "../../../../../../img/cards/3.png";
import card4 from "../../../../../../img/cards/4.png";
import card5 from "../../../../../../img/cards/5.png";
import card6 from "../../../../../../img/cards/6.png";
import card7 from "../../../../../../img/cards/7.png";
import card8 from "../../../../../../img/cards/8.png";
import avatar1 from "../../../../../../img/cards/user-avatar.svg";
import logo1 from "../../../../../../img/cards/logo.svg";
const CardsAll = () => {
  return (
    <div className="cards__wrapper">
      <Card
        id="1"
        img={card1}
        mainImg={avatar1}
        userName={"User Name"}
        userNameLink={"@username"}
        title={"WFH - art name"}
        logo={logo1}
        cardTime={"05h 02m 41s"}
        count={"1,5Ma"}
        titleProfile="Approved"
        color="#86D084"
      />
      <Card
        id="2"
        img={card2}
        mainImg={avatar1}
        userName={"User Name"}
        userNameLink={"@username"}
        title={"WFH - art name"}
        logo={logo1}
        cardTime={"05h 02m 41s"}
        count={"1,5Ma"}
        titleProfile="On moderation"
        color="#FFBA09"
      />
      <Card
        id="3"
        img={card3}
        mainImg={avatar1}
        userName={"User Name"}
        userNameLink={"@username"}
        title={"WFH - art name"}
        logo={logo1}
        cardTime={"05h 02m 41s"}
        count={"1,5Ma"}
        titleProfile="Declined"
        color="#FF5E54"
      />
      <Card
        id="4"
        img={card4}
        mainImg={avatar1}
        userName={"User Name"}
        userNameLink={"@username"}
        title={"WFH - art name"}
        logo={logo1}
        cardTime={"05h 02m 41s"}
        count={"1,5Ma"}
        titleProfile="Approved"
        color="#86D084"
      />
      <Card
        id="5"
        img={card5}
        mainImg={avatar1}
        userName={"User Name"}
        userNameLink={"@username"}
        title={"WFH - art name"}
        logo={logo1}
        cardTime={"05h 02m 41s"}
        count={"1,5Ma"}
        titleProfile="Approved"
        color="#86D084"
      />
      <Card
        id="6"
        img={card6}
        mainImg={avatar1}
        userName={"User Name"}
        userNameLink={"@username"}
        title={"WFH - art name"}
        logo={logo1}
        cardTime={"05h 02m 41s"}
        count={"1,5Ma"}
        titleProfile="Approved"
        color="#86D084"
      />
      <Card
        id="7"
        img={card7}
        mainImg={avatar1}
        userName={"User Name"}
        userNameLink={"@username"}
        title={"WFH - art name"}
        logo={logo1}
        cardTime={"05h 02m 41s"}
        count={"1,5Ma"}
        titleProfile="Approved"
        color="#86D084"
      />
      <Card
        id="8"
        img={card8}
        mainImg={avatar1}
        userName={"User Name"}
        userNameLink={"@username"}
        title={"WFH - art name"}
        logo={logo1}
        cardTime={"05h 02m 41s"}
        count={"1,5Ma"}
        titleProfile="Approved"
        color="#86D084"
      />
    </div>
  );
};

export default CardsAll;
