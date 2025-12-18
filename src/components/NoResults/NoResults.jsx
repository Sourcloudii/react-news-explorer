import "./NoResults.css";
import notFound from "../../images/notFound.svg";

export default function NoResults() {
  return (
    <div className="no-results__content">
      <img src={notFound} alt="not found" className="no-results__img" />
      <h1 className="no-results__title">Well, this is awkward</h1>
      <p className="no-results__text">No results were found for that search</p>
    </div>
  );
}
