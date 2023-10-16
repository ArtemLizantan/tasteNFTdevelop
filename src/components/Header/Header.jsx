import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import MainButton from "../UI/MainButton/MainButton";
import HeaderPopup from "./HeaderPopup/HeaderPopup";
import Logo from "./Logo/Logo";
import Search from "./Search/Search";

import "./header.scss";
const Header = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

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
              <MainButton
                name="Connect wallet"
                main={true}
                onClick={() => setOpen(!false)}
              />
            </div>
          </div>
        </div>
      </div>
      {open && <HeaderPopup onClick={() => setOpen(false)} />}
    </header>
  );
};

export default Header;
