import Panel from "./Panel/Panel";
import "./activityPanels.scss";
import img1 from "../../../../../../img/artworks/panel/activity-avatar.svg";
const ActivityPanel = () => {
  return (
    <div className="activity-panels">
      <h2 className="activity-panels__title">Activity</h2>
      <div className="activity-panels__wrapper">
        <Panel
          img={img1}
          text="Bid placed by 0x6FC0...14A4"
          date="May 19, 2021 at 2:27pm"
        />
        <Panel
          img={img1}
          text="Bid placed by 0x6FC0...14A4"
          date="May 19, 2021 at 2:27pm"
        />
        <Panel
          img={img1}
          text="Bid placed by 0x6FC0...14A4"
          date="May 19, 2021 at 2:27pm"
        />
        <Panel
          img={img1}
          text="Bid placed by 0x6FC0...14A4"
          date="May 19, 2021 at 2:27pm"
        />
        <Panel
          img={img1}
          text="Bid placed by 0x6FC0...14A4"
          date="May 19, 2021 at 2:27pm"
        />
        <Panel
          img={img1}
          text="Bid placed by 0x6FC0...14A4"
          date="May 19, 2021 at 2:27pm"
        />
      </div>
    </div>
  );
};

export default ActivityPanel;
