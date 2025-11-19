import "./About.css";
import me from "../../images/Me-Profress.jpg";

function About() {
  return (
    <div className="about__container">
      <img src={me} alt="Picture of creator" className="about__img" />
      <div className="about__text__container">
        <h2 className="about__title">About News Explorer</h2>
        <p className="about__subtitle">
          News Explorer is a web application that allows users to search for and
          save news articles from various sources. It provides a user-friendly
          interface to explore the latest news on any topic of interest.
        </p>
      </div>
    </div>
  );
}

export default About;
