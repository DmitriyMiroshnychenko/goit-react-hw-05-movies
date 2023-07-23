import PropTypes from 'prop-types';
import { Form } from './Form';

export const SearchForm = () => {
  <form className={styles.SearchForm} onSubmit={handleSubmit}>
    <input
      className={styles['SearchForm-input']}
      type="text"
      name="searchQuery"
      value={searchQuery}
      onChange={handleSearchQuery}
      autoComplete="off"
      placeholder="Search movies"
    />
    <button type="submit" className={styles['SearchForm-button']}>
      <IoSearch className={styles['SearchForm-icon']} />
    </button>
  </form>;
};

Form.propTypes = {
  searchQuery: PropTypes.string,
  handleSearchQuery: PropTypes.func,
  handleSubmit: PropTypes.func,
};
