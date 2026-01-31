import "./About.css";
import me from "../../images/Me-Profress.jpg";

function About() {
  return (
    <section className="about-section">
      <img src={me} alt="Picture of creator" className="about-section__img" />
      <div className="about-section__text-container">
        <h2 className="about-section__title">About the author</h2>
        <p className="about-section__subtitle">
          Hi! I'm Ken, a full-stack developer who studied at TripleTens coding bootcamp. I am
          fluent in HTML/CSS/JavaScript, along with React.js, Node.js and express.js. I am
          currently working on side projects including TripleTen's final proojcet, this news
          explorer app.
        </p>
      </div>
    </section>
  );
}

export default About;
