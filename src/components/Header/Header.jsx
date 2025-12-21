import "./Header.css";
import { Link, useLocation } from "react-router-dom";
import logoLight from "../../images/logo-light.svg";
import logoDark from "../../images/logo-dark.svg";
import Navigation from "../Navigation/Navigation";

function Header({ handleLoginModal, handleLogout }) {
  const location = useLocation();

  if (location.pathname == "/") {
    return (
      <header className="header">
        <div className="header__content">
          <Link to="/" className="header__logo-link">
            <img src={logoLight} alt="News Explorer Logo" className="header__logo" />
          </Link>
          <Navigation
            path={location.pathname}
            handleLoginModal={handleLoginModal}
            handleLogout={handleLogout}
          />
        </div>
      </header>
    );
  } else if (location.pathname == "/saved-news") {
    return (
      <header className="header header_dark-theme">
        <div className="header__content">
          <Link to="/" className="header__logo-link">
            <img src={logoDark} alt="News Explorer Logo" className="header__logo" />
          </Link>
          <Navigation
            path={location.pathname}
            handleLoginModal={handleLoginModal}
            handleLogout={handleLogout}
          />
        </div>
      </header>
    );
  }
}
export default Header;
