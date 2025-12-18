import "./Main.css";
import { useState } from "react";
import SearchForm from "../SearchForm/SearchForm";
import About from "../About/About";
import Preloader from "../Preloader/Preloader";
import NewsCard from "../NewsCard/NewsCard";
import NoResults from "../NoResults/NoResults";

function Main({ handleSearchSubmit, articles, isLoading, handleSaveArticle }) {
  const [visibleArticles, setVisibleArticles] = useState(3);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = (e) => {
    setHasSearched(true);
    handleSearchSubmit(e);
    setVisibleArticles(3);
  };

  const handleShowMore = () => setVisibleArticles((prev) => prev + 3);

  return (
    <main className="main">
      <section className="hero">
        <div className="section__content">
          <SearchForm handleSearchSubmit={handleSearch} />
        </div>
      </section>
      {hasSearched && (
        <>
          {isLoading ? (
            <section className="preloader-section">
              <div className="section__content">
                <Preloader />
              </div>
            </section>
          ) : articles.length === 0 ? (
            <section className="no-results">
              <div className="section__content">
                <NoResults />
              </div>
            </section>
          ) : (
            <section className="results">
              <div className="section__content results__content">
                <p className="results__text">Search results</p>
                <ul className="results__list">
                  {articles.slice(0, visibleArticles).map((item) => (
                    <NewsCard
                      key={item.url}
                      article={item}
                      handleSaveArticle={handleSaveArticle}
                    />
                  ))}
                </ul>
                {visibleArticles < articles.length && (
                  <button className="results__show-more-btn" onClick={handleShowMore}>
                    Show More
                  </button>
                )}
              </div>
            </section>
          )}
        </>
      )}
      <section className="about">
        <div className="section__content">
          <About />
        </div>
      </section>
    </main>
  );
}

export default Main;
