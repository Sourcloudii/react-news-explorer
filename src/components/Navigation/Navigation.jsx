import "./Navigation.css";
import logoutdark from "../../images/logout-dark.svg";
import logoutLight from "../../images/logout-light.svg";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CurrentUserContext } from "../../context/currentUserContent.js";

export default function Navigation({ path, handleLoginModal, handleLogout }) {
  const { isLoggedIn, user } = useContext(CurrentUserContext);
  if (path === "/") {
    return (
      <div className="navigation">
        <Link to="/" className="navigation__link navigation__link-active-light">
          Home
        </Link>
        {isLoggedIn && (
          <Link to="/saved-news" className="navigation__link">
            Saved articles
          </Link>
        )}
        <div className="navigation__logout-container">
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
      </div>
    );
  } else if (path === "/saved-news") {
    return (
      <div className="navigation">
        <Link to="/" className="navigation__link dark-text">
          Home
        </Link>
        {isLoggedIn && (
          <Link to="/saved-news" className="navigation__link navigation__link-active-dark">
            Saved articles
          </Link>
        )}
        <div className="navigation__logout-container">
          {isLoggedIn ? (
            <div className="navigation-btn__container navigation-btn__container-dark" onClick={handleLogout}>
              <button className="navigation__header-btn-user dark-text">{user.name}</button>
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
      </div>
    );
  }
}
