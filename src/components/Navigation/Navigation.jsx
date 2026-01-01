import "./Navigation.css";
import logoutdark from "../../images/logout-dark.svg";
import logoutLight from "../../images/logout-light.svg";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CurrentUserContext } from "../../context/currentUserContent.js";

export default function Navigation({ path, handleLoginModal, handleLogout, menuState, setMenuState }) {
  const { isLoggedIn, user } = useContext(CurrentUserContext);

  const menuStateOff = () => setMenuState(false);

  if (path === "/") {
    return (
      <div className={`navigation ${menuState ? "navigation__menu-active" : ""}`}>
        <Link to="/" className="navigation__link navigation__link-active-light">
          Home
        </Link>
        {isLoggedIn && (
          <Link to="/saved-news" className="navigation__link" onClick={menuStateOff}>
            Saved articles
          </Link>
        )}
        {isLoggedIn ? (
          <div className="navigation-btn__container" onClick={handleLogout}>
            <button className="navigation__header-btn-user">{user.name}</button>
            <img
              src={path === "/" ? logoutLight : logoutdark}
              alt="Logout Icon"
              className="navigation__header-btn-img"
            />
          </div>
        ) : (
          <button className="navigation__header-btn" onClick={handleLoginModal}>
            Sign in
          </button>
        )}
      </div>
    );
  } else if (path === "/saved-news") {
    return (
      <div className={`navigation ${menuState ? "navigation__menu-active" : ""}`}>
        <Link to="/" className="navigation__link dark-text" onClick={menuStateOff}>
          Home
        </Link>
        {isLoggedIn && (
          <Link to="/saved-news" className="navigation__link navigation__link-active-dark">
            Saved articles
          </Link>
        )}
        {isLoggedIn ? (
          <div
            className="navigation-btn__container navigation-btn__container-dark"
            onClick={handleLogout}
          >
            <button className="navigation__header-btn-user dark-text">{user.name}</button>
            <img
              src={path === "/" ? logoutLight : `${menuState ? logoutLight : logoutdark}`}
              alt="Logout Icon"
              className="navigation__header-btn-img"
            />
          </div>
        ) : (
          <button className="navigation__header-btn" onClick={handleLoginModal}>
            Sign in
          </button>
        )}
      </div>
    );
  }
}
