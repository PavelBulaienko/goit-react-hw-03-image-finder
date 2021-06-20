import propTypes from 'prop-types';

const Searchbar = ({ onSubmintHandle }) => (
  <header className="Searchbar">
    <form className="SearchForm" onSubmit={onSubmintHandle}>
      <button type="submit" className="SearchForm-button">
        <span className="SearchForm-button-label">Search</span>
      </button>

      <input
        className="SearchForm-input"
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
      />
    </form>
  </header>
);

Searchbar.propTypes = {
  onSubmintHandle: propTypes.func.isRequired,
};

export default Searchbar;
