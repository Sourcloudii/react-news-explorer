import "./Intro.css";
import { useContext } from "react";
import { CurrentUserContext } from "../../context/currentUserContent.js";

export default function Intro({ articles }) {
  const { user } = useContext(CurrentUserContext);

  return (
      <div className="intro__content">
        <p className="intro__title">Saved articles</p>
        {articles.length === 1 ? (
          <h1 className="intro__subtitle">{user.name}, you have 1 saved article</h1>
        ) : (
          <h1 className="intro__subtitle">
            {user.name}, you have {articles.length} saved articles
          </h1>
        )}
        <p className="intro__keywords">
          By keywords:{" "}
          <span className="intro__span__keywords">
            {articles
              .map((article) => article.keyword)
              .slice(0, 2)
              .join(", ")}
          </span>
        </p>
      </div>
  );
}
