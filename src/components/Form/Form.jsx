import PropTypes from 'prop-types';
import { IoSearch } from 'react-icons/io5';
import styles from './Form.module.css';

export const Form = ({ searchQuery, onSubmit, handleSearchQuery }) => {
  function handleSubmit(event) {
    event.preventDefault();
    onSubmit(event.target.elements.searchQuery.value);
  }
  return (
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
    </form>
  );
};

Form.propTypes = {
  searchQuery: PropTypes.string,
  handleSearchQuery: PropTypes.func,
  handleSubmit: PropTypes.func,
};
