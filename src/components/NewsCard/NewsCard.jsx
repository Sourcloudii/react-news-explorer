import "./NewsCard.css";
import { useState } from "react";
import { useContext } from "react";
import { CurrentUserContext } from "../../context/currentUserContent";
import bookmarkIcon from "../../images/bookmark.svg";
import bookmarkIcon_hover from "../../images/bookmark-hover.svg";
import bookmarkIcon_saved from "../../images/bookmark-saved.svg";
import trashIcon from "../../images/trash.svg";
import trashIcon_hover from "../../images/trash-hover.svg";

export default function NewsCard({ article, handleSaveArticle, handleDeleteArticle, location }) {
  const { isLoggedIn } = useContext(CurrentUserContext);
  const [saved, setSaved] = useState(false);
  const [hover, setHover] = useState(false);

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
    console.log(location);
  };

  const handleImgHover = () => {
    if (saved) return bookmarkIcon_saved;

    if (hover && !saved) return bookmarkIcon_hover;
    return bookmarkIcon;
  };

  const handleTrashHover = () => {
    if (hover) return trashIcon_hover;
    return trashIcon;
  };

  const handleTrashClick = (e) => {
    e.stopPropagation();
    setSaved(false);
    handleDeleteArticle(article._id);
  };

  return (
    <li className="article-card">
      <div className="article-card__container" onClick={() => handleOpenArticle(article.url)}>
        <div className="article-card-bookmark-container" onClick={handleBookmarkClick}>
          {hover && !isLoggedIn && location === "/" && (
            <p className="article__login-alert">Log in to save articles</p>
          )}
          {hover && isLoggedIn && location === "/saved-news" && (
            <p className="article__trash-alert">Remove from saved</p>
          )}
          {location === "/saved-news" ? (
            <img
              src={handleTrashHover()}
              alt="trash"
              className="article__trash-img"
              onClick={handleTrashClick}
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            />
          ) : (
            <img
              src={handleImgHover()}
              alt="bookmark"
              className="article__bookmark-img"
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            />
          )}
        </div>
        <p className="article__keyword">{article.keyword}</p>
        <img src={article.urlToImage} alt={article.title} className="article__img" />
        <div className="article__text-container">
          <p className="article__date">{formattedDate}</p>
          <h2 className="article__title">{article.title}</h2>
          <p className="article__content">{articleContent}</p>
          <h2 className="article__source">{article.source.name}</h2>
        </div>
      </div>
    </li>
  );
}
