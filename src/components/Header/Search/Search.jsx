import "./search.scss";
const Search = () => {
  return (
    <form className="header__form">
      <div className="icon-search input__wrapper">
        <input
          type="text"
          placeholder="Search for ..."
          className="header__input"
        />
      </div>
    </form>
  );
};

export default Search;
