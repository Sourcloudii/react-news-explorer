import "./Navigation.css";
import logoutdark from "../../images/logout-dark.svg";
import logoutLight from "../../images/logout-light.svg";
import { Link, useLocation } from "react-router-dom";

function Navigation({ isLoggedIn = false, user = "Ken" }) {
  const location = useLocation();

  return (
    <div className="navigation">
      <Link to="/" className="navigation__link">
        Home
      </Link>
      {isLoggedIn && (
        <Link to="/saved-news" className="navigation__link">
          Saved Articles
        </Link>
      )}
      <div className="navigation__logout-container">
        {isLoggedIn ? (
          <div className="navigation-btn__container">
            <button className="navigation__header-btn-user">{user}</button>
            <img
              src={location.pathname === "/" ? logoutLight : logoutdark}
              alt="Logout Icon"
              className="navigation__header-btn-img"
            />
          </div>
        ) : (
          <button className="navigation__header-btn">Sign in</button>
        )}
      </div>
    </div>
  );
  // if (location.pathname === "/") {
  // return (
  //   <div className="navigation navigation-transparent">
  //     <Link to="/" className="navigation__link navigation-transparent__link">
  //       Home
  //     </Link>
  //     <Link
  //       to="/saved-news"
  //       className="navigation__link navigation-transparent__link"
  //     >
  //       Saved Articles
  //     </Link>
  //     <div className="navigation__logout-container">
  //       {isLoggedIn ? (
  //         <div className="header-btn__container">
  //           <button className="navigation__header-btn navigation-transparent__header__btn">
  //             {user}
  //           </button>
  //           <img
  //             src={logoutLight}
  //             alt="Logout Icon"
  //             className="navigation__header-btn-img navigation-transparent__header-btn-img"
  //           />
  //         </div>
  //       ) : (
  //         <button className="navigation__header-btn navigation-transparent__header__btn">
  //           Sign in
  //         </button>
  //       )}
  //     </div>
  //   </div>
  // );
  // } else if (location.pathname === "/saved-news") {
  //   return (
  //     <div className="navigation navigation-solid">
  //       <Link to="/" className="navigation__link navigation-solid__link">
  //         Home
  //       </Link>
  //       <Link
  //         to="/saved-news"
  //         className="navigation__link navigation-solid__link"
  //       >
  //         Saved Articles
  //       </Link>
  //       <div className="navigation__logout-container">
  //         {isLoggedIn ? (
  //           <div className="header-btn__container">
  //             <button className="navigation__header-btn navigation-solid__header-btn">
  //               {user}
  //             </button>
  //             <img
  //               src={logoutdark}
  //               alt="Logout Icon"
  //               className="navigation__header-btn-img navigation-solid__header-btn-img"
  //             />
  //           </div>
  //         ) : (
  //           <button className="navigation__header-btn navigation-solid__header-btn">
  //             Sign in
  //           </button>
  //         )}
  //       </div>
  //     </div>
  // );
  // }
}

export default Navigation;
