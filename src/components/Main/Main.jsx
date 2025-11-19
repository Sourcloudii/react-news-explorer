import "./Main.css";
import SearchForm from "../SearchForm/SearchForm";
import About from "../About/About.jsx";

function Main() {
  return (
    <main className="main">
      <section className="hero">
        <div className="section__content">
          <SearchForm />
        </div>
      </section>
      <section className="results">
        <div className="section__content"></div>
      </section>
      <section className="about">
        <div className="section__content">
          <About />
        </div>
      </section>
    </main>
  );
}

export default Main;
