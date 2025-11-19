import "./SearchForm.css";

function SearchForm() {
  return (
    <div className="searchForm">
      <div className="searchForm__content">
        <h1 className="searchForm__title">What's going on in the world?</h1>
        <p className="searchForm__subtitle">
          Find the latest news on any topic and save them in your personal
          account.
        </p>
        <div className="searchForm__field">
          <input
            type="text"
            className="searchForm__field-input"
            placeholder="Enter topic"
          />
          <button className="searchForm__field-btn">Search</button>
        </div>
      </div>
    </div>
  );
}

export default SearchForm;
