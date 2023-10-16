import "./activity.scss";
import ActivityInfo from "./ActivityInfo/ActivityInfo";
import ActivityPanel from "./ActivityPanels/ActivityPanels";
const Activity = () => {
  return (
    <section className="activity">
      <div className="container">
        <div className="activity__body">
          <ActivityInfo />
          <ActivityPanel />
        </div>
      </div>
    </section>
  );
};

export default Activity;
