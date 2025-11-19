import "./Header.css";
import logoLight from "../../images/logo-light.svg";
import Navigation from "../Navigation/Navigation";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();

  if (location.pathname == "/") {
    return (
      <header className="header">
        <div className="header__content">
          <Link to="/">
            <img
              src={logoLight}
              alt="News Explorer Logo"
              className="header__logo"
            />
          </Link>
          <Navigation />
        </div>
      </header>
    );
  } else if (location.pathname == "/saved-news") {
    return (
      <header className="header">
        <div className="header__content">
          <Link to="/">
            <img
              src={logoLight}
              alt="News Explorer Logo"
              className="header__logo"
            />
          </Link>
          <Navigation />
        </div>
      </header>
    );
  }
}
export default Header;
