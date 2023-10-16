import HeroInfo from "./HeroInfo/HeroInfo";
import HeroSwiper from "./HeroSwiper/HeroSwiper";
import "./hero.scss"
const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__wrapper">
          <HeroInfo />
          <HeroSwiper />
        </div>
      </div>
    </section>
  );
};

export default Hero;
