import PropTypes from 'prop-types';
import { Form as SearchForm } from './Form';

export const SearchForm = () => {
  //const [searchQuery, setSearchQuery] = useState('');
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

SearchForm.propTypes = {
  searchQuery: PropTypes.string,
  handleSearchQuery: PropTypes.func,
  handleSubmit: PropTypes.func,
};
