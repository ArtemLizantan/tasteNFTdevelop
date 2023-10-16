import Activity from "./Sections/Activity/Activity";
import ActivityCards from "./Sections/ActivityCards/ActivityCards";
import HeroArt from "./Sections/HeroArt/HeroArt";
const Artwork = (props) => {
  return (
    <>
      <HeroArt />
      <Activity />
      <ActivityCards />
    </>
  );
};

export default Artwork;
