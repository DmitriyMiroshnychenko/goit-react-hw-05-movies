import { fetchMovieById } from 'services/movies-api-set';
import { useEffect, useState } from 'react';
import { Outlet, useParams, useLocation, useNavigate } from 'react-router-dom';
import { Container } from 'utils/Container';
import { MovieMoreDetails } from '../MovieMoreDetails/MovieMoreDetails';
import noPoster from '../../assets/no-image-poster-large.jpg';
import styles from './MovieDetailsPage.module.css';

export function MovieDetailsPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [prevLocation, setPrevLocation] = useState();

  useEffect(() => {
    fetchMovieById(movieId).then(setMovie);
  }, [movieId]);

  useEffect(() => {
    if (!location.state) {
      return;
    }

    const { state } = location;
    setPrevLocation(`${state.pathname}${state.search}`);
  }, [location]);

  function onGoBack() {
    navigate(prevLocation ? prevLocation : '/');
  }

  return (
    <>
      {movie && (
        <Container>
          <button className={styles.BackBtn} type="button" onClick={onGoBack}>
            Back
          </button>
          <div className={styles.MovieContainer}>
            <img
              className={styles.MoviePoster}
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/original${movie.poster_path}`
                  : noPoster
              }
              alt={movie.poster_path}
              width="280"
            />
            <ul>
              <li className={styles['MovieDetails-subsection']}>
                <h2 className={styles['MovieDetails-title']}>
                  {movie.original_title} ({movie.release_date.slice(0, 4)})
                </h2>
                <p>
                  User score:{' '}
                  {movie.vote_average === 0
                    ? 'N/A'
                    : `${movie.vote_average * 10}%`}
                </p>
              </li>
              <li className={styles['MovieDetails-subsection']}>
                <h3 className={styles['MovieDetails-title']}>Overview</h3>
                <p>{movie.overview}</p>
              </li>
              <li className={styles['MovieDetails-subsection']}>
                <h3 className={styles['MovieDetails-title']}>Genres</h3>
                <p>
                  {movie.genres.length > 0
                    ? movie.genres.map(genre => genre.name).join(', ')
                    : 'No genres found'}
                </p>
              </li>
            </ul>
          </div>

          <hr />
          <MovieMoreDetails />
          <Outlet />
        </Container>
      )}
    </>
  );
}

export default MovieDetailsPage;
