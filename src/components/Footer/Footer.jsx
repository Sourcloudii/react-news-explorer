import "./Footer.css";
import { Link } from "react-router-dom";
import githubIcon from "../../images/github.svg";
import linkedInIcon from "../../images/linkedIn.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <p className="footer__text">© 2025 Supersite, Powered by News API</p>
        <div className="footer__nav">
          <div className="footer__nav-words">
            <Link to="/" className="footer__link">
              Home
            </Link>
            <a
              href="https://tripleten.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__link"
            >
              TripleTen
            </a>
          </div>
          <div className="footer__nav-imgs">
            <a href="https://github.com/Sourcloudii" className="footer__img-wrapper">
              <img src={githubIcon} alt="Github" className="footer__img" />
            </a>
            <a href="https://www.linkedin.com/in/kgortiz/" className="footer__img-wrapper">
              <img src={linkedInIcon} alt="LinkedIn" className="footer__img" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
