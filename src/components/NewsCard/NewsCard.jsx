import "./NewsCard.css";
import { useState } from "react";
import { useContext } from "react";
import { CurrentUserContext } from "../../context/currentUserContent";
import bookmarkIcon from "../../images/bookmark.svg";
import bookmarkIcon_hover from "../../images/bookmark-hover.svg";
import bookmarkIcon_saved from "../../images/bookmark-saved.svg";

export default function NewsCard({ article, handleSaveArticle }) {
  const { isLoggedIn } = useContext(CurrentUserContext);
  const [saved, setSaved] = useState(false);
  const [loginAlert, setLoginAlert] = useState(false);
  const [hovered, setHovered] = useState(false);

  const articleContent = (article.content || "").split("[")[0].replace(/<[^>]*>/g, "");
  const publishedDate = new Date(article.publishedAt);
  const formattedDate = publishedDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const handleOpenArticle = (url) => window.open(url, "_blank");

  const handleBookmarkClick = (e) => {
    e.stopPropagation();
    if (isLoggedIn) {
      setSaved(!saved);
      handleSaveArticle(article);
    }
  };

  const handleHover = (e) => {
    if (saved) return bookmarkIcon_saved;

    if (hovered && !saved) return bookmarkIcon_hover;
    return bookmarkIcon;
  };

  return (
    <li className="article__item">
      <div className="article__item-container" onClick={() => handleOpenArticle(article.url)}>
        <div
          className="article__bookmark-container"
          onClick={handleBookmarkClick}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {hovered && !isLoggedIn && (
            <p className="article__login-alert">Log in to save articles</p>
          )}
          <img src={handleHover()} alt="bookmark" className="article__bookmark-btn" />
        </div>
        <p className="article__keyword">{article.keyword}</p>
        <img src={article.urlToImage} alt={article.title} className="article__img" />
        <div className="article__text-container">
          <p className="article__date">{formattedDate}</p>
          <h1 className="article__title">{article.title}</h1>
          <p className="article__content">{articleContent}</p>
          <h2 className="article__source">{article.source.name}</h2>
        </div>
      </div>
    </li>
  );
}
