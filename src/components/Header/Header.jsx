import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Logo from "./Logo/Logo";
import Search from "./Search/Search";
import avatar from "../../img/hero/avatar.png";
import logoSmall from "../../img/hero/hero-icon.svg";
import "./header.scss";
import HeaderPopup from "./HeaderPopup/HeaderPopup";
import ProfilePopup from "./ProfilePopup/ProfilePopup";
import EditPopup from "../Pages/MyProfile/EditPopup/EditPopup";
import BalancePopup from "../Pages/MyProfile/BalancePopup/BalancePopup";
import MainButton from "../UI/MainButton/MainButton";

const Header = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [openBalance, setOpenBalance] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const toggleProfilePopup = () => {
    setOpenProfile((prev) => !prev);
  };

  const toggleEditPopup = () => {
    setOpenEdit((prev) => !prev);
  };

  const toggleBalancePopup = () => {
    setOpenBalance((prev) => !prev);
  };

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
            {location.pathname === "/myProfile" ? (
              <ProfileHeader
                toggleProfilePopup={toggleProfilePopup}
                toggleEditPopup={toggleEditPopup}
                toggleBalancePopup={toggleBalancePopup}
                openProfile={openProfile}
              />
            ) : (
              <ConnectWalletHeader setOpen={setOpen} />
            )}
          </div>
        </div>
      </div>
      {open && <HeaderPopup onClick={() => setOpen(false)} />}
      {openEdit && <EditPopup onClick={() => setOpenEdit(false)} />}
      {openBalance && <BalancePopup onClick={() => setOpenBalance(false)} />}
    </header>
  );
};

const ProfileHeader = ({
  toggleProfilePopup,
  toggleEditPopup,
  toggleBalancePopup,
  openProfile,
}) => (
  <div className="header__profile">
    <MainButton name="+ Add artwork" main={true} />
    <div className="header__user header-user">
      <div className="header-user__left">
        <img src={avatar} alt="avatar" />
      </div>
      <div onClick={toggleProfilePopup} className="header-user__right">
        {openProfile && (
          <ProfilePopup
            onClick={toggleEditPopup}
            onClickBalance={toggleBalancePopup}
          />
        )}
        <div style={{ gap: "0px" }} className="hero-top__right">
          <h3 className="hero-top__username" style={{ fontSize: "16px" }}>
            User Name
          </h3>
          <div className="header-user__bottom">
            <a
              style={{ fontSize: "12px" }}
              href="#!"
              className="hero-top__right-link"
            >
              @username
            </a>
            <span>Balance:</span>
            <div className="hero-bottom__soldest">
              <img
                style={{ width: "16px", height: "16px" }}
                src={logoSmall}
                alt="logo-small"
              />
              <span style={{ fontSize: "12px" }}>1.5M</span>
            </div>
          </div>
        </div>
      </div>
      <span className="icon-arrow-down header-user__arrow"></span>
    </div>
  </div>
);

const ConnectWalletHeader = ({ setOpen }) => (
  <div className="header__right">
    <MainButton
      name="Connect wallet"
      main={true}
      onClick={() => setOpen(!false)}
    />
  </div>
);

export default Header;
