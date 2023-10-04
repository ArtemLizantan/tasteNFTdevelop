import MainButton from "../Sections/UI/MainButton/MainButton";
import Logo from "./Logo/Logo";
import Search from "./Search/Search";
import "./header.scss";
const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <div className="container">
          <div className="header__body">
            <div className="header__left">
              <Logo />
            </div>
            <div className="header__center">
              <Search />
            </div>
            <div className="header__right">
              <MainButton name="Connect wallet"/>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
