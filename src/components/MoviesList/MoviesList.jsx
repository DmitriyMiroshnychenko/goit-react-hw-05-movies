import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import noPoster from '../../assets/no-image-poster-small.jpg';
import styles from './MoviesList.module.css';

export function MoviesList({ movies }) {
  const location = useLocation();
  return (
    <ul className={styles.TrendingList}>
      {movies.map(({ title, id, poster_path }) => (
        <li className={styles['TrendingList-item']} key={id}>
          <Link
            className={styles['TrendingList-item--link']}
            to={`/movies/${id}`}
            state={{ from: location }}
          >
            <img
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/w500${poster_path}`
                  : noPoster
              }
              alt={title}
              width="50"
            />
            <span>{title}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      poster_path: PropTypes.string,
    })
  ),
};
