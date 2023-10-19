import "./featureds.scss";
import Featured from "./Featured/Featured";
import img1 from "../../../../../img/featureds/1.png";
import img2 from "../../../../../img/featureds/2.png";
import img3 from "../../../../../img/featureds/3.png";
import img4 from "../../../../../img/featureds/4.png";
import img5 from "../../../../../img/featureds/5.png";
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
              img={img2}
            />
            <Featured
              username="@username"
              name="User Name"
              sales="24 sales on 32ETH"
              img={img3}
            />
            <Featured
              username="@username"
              name="User Name"
              sales="24 sales on 32ETH"
              img={img4}
            />
            <Featured
              username="@username"
              name="User Name"
              sales="24 sales on 32ETH"
              img={img5}
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
