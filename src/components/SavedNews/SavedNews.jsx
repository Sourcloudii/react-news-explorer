import "./SavedNews.css";
import NewsCard from "../NewsCard/NewsCard.jsx";
import Intro from "../SavedNews/Intro.jsx";
import { useContext } from "react";
import { CurrentUserContext } from "../../context/currentUserContent.js";

export default function SavedNews({ savedArticles, handleDeleteArticle, location }) {
  const { user } = useContext(CurrentUserContext);

  return (
    <div className="savedNews">
      <section className="intro">
        <div className="section__content">
          <Intro articles={savedArticles} />
        </div>
      </section>
      <section className="results">
        <div className="section__content">
          <ul className="results__list">
            {savedArticles
              .filter((article) => article.owner === user._id)
              .map((item) => (
                <NewsCard
                  key={item.url}
                  article={item}
                  handleDeleteArticle={handleDeleteArticle}
                  location={location}
                />
              ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
