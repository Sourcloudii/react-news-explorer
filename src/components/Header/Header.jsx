import "./Header.css";
import { Link } from "react-router-dom";
import logoLight from "../../images/logo-light.svg";
import logoDark from "../../images/logo-dark.svg";
import menuIcon_light from "../../images/menu-icon-light.svg";
import menuIcon_dark from "../../images/menu-Icon-dark.svg";
import closeBtn from "../../images/close-btn.svg";
import Navigation from "../Navigation/Navigation";

function Header({ handleLoginModal, handleLogout, setMenuState, menuState, modalState, toggleMenu, location }) {

  if (location == "/") {
    return (
      <header className="header">
        <div className={`header__content ${menuState ? "header__content_menu-active" : ""}`}>
          <Link to="/" className="header__logo-link">
            <img src={logoLight} alt="News Explorer Logo" className="header__logo" />
          </Link>
          {menuState || modalState ? (
            <img
              src={closeBtn}
              alt="menu"
              className="header__navigation-icon"
              onClick={toggleMenu}
            />
          ) : (
            <img
              src={menuIcon_light}
              alt="menu"
              className="header__navigation-icon"
              onClick={toggleMenu}
            />
          )}
          <Navigation
            path={location}
            handleLoginModal={handleLoginModal}
            handleLogout={handleLogout}
            menuState={menuState}
            setMenuState={setMenuState}
          />
        </div>
      </header>
    );
  } else if (location == "/saved-news") {
    return (
      <header className="header header_dark-theme">
        <div className={`header__content ${menuState ? "header__content_menu-active" : ""}`}>
          <Link to="/" className="header__logo-link">
            <img src={`${menuState ? logoLight : logoDark}`} alt="News Explorer Logo" className="header__logo" />
          </Link>
          {menuState || modalState ? (
            <img
              src={closeBtn}
              alt="menu"
              className="header__navigation-icon"
              onClick={toggleMenu}
            />
          ) : (
            <img
              src={menuIcon_dark}
              alt="menu"
              className="header__navigation-icon"
              onClick={toggleMenu}
            />
          )}
          <Navigation
            path={location}
            handleLoginModal={handleLoginModal}
            handleLogout={handleLogout}
            menuState={menuState}
            setMenuState={setMenuState}
          />
        </div>
      </header>
    );
  }
}
export default Header;
