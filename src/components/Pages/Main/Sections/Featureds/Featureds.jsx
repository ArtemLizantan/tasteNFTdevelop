import "./featureds.scss";
import Featured from "./Featured/Featured";
import img1 from "../../../../../img/featureds/1.png";
import Title from "../../../../UI/Title/Title";
const Featureds = () => {
  return (
    <section className="featureds">
      <div className="container">
        <div className="featureds__wrapper">
          <Title title="Featured creators" />
          <div className="featureds__cards">
            <Featured
              username="@username"
              name="User Name"
              sales="24 sales on 32ETH"
              img={img1}
            />
            <Featured
              username="@username"
              name="User Name"
              sales="24 sales on 32ETH"
              img={img1}
            />
            <Featured
              username="@username"
              name="User Name"
              sales="24 sales on 32ETH"
              img={img1}
            />
            <Featured
              username="@username"
              name="User Name"
              sales="24 sales on 32ETH"
              img={img1}
            />
            <Featured
              username="@username"
              name="User Name"
              sales="24 sales on 32ETH"
              img={img1}
            />
            <Featured
              username="@username"
              name="User Name"
              sales="24 sales on 32ETH"
              img={img1}
            />
            <Featured
              username="@username"
              name="User Name"
              sales="24 sales on 32ETH"
              img={img1}
            />
            <Featured
              username="@username"
              name="User Name"
              sales="24 sales on 32ETH"
              img={img1}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featureds;
