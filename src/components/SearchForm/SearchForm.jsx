import "./SearchForm.css";
import { useState } from "react";

function SearchForm({ handleSearchSubmit }) {
  const [inputValue, setInputValue] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    handleSearchSubmit(inputValue);
  }

  return (
    <div className="searchForm">
      <div className="searchForm__content">
        <h1 className="searchForm__title">What's going on in the world?</h1>
        <p className="searchForm__subtitle">
          Find the latest news on any topic and save them in your personal account.
        </p>
        <form className="searchForm__field" onSubmit={handleSubmit}>
          <input
            minLength="2"
            type="text"
            className="searchForm__input"
            placeholder="Enter topic"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            required
          />
          <button type="submit" className="searchForm__btn">
            Search
          </button>
        </form>
      </div>
    </div>
  );
}

export default SearchForm;
