import { useState, useEffect, useLayoutEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from 'services/movies-api-set';
import noPhoto from '../../assets/no-image-actor.jpg';
import styles from './Cast.module.css';

export function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetchMovieCast(movieId).then(result => {
      setCast(result.cast);
    });
  }, [movieId]);

  useLayoutEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    window.scrollBy({
      top: document.documentElement.clientHeight - 160,
      behavior: 'smooth',
    });
  }, [cast]);

  return (
    <>
      {cast && (
        <>
          <hr />
          <ul className={styles.CastList}>
            {cast.map(({ profile_path, name, character, id }) => (
              <li className={styles['CastList-item']} key={id}>
                <img
                  src={
                    profile_path
                      ? `https://image.tmdb.org/t/p/w500${profile_path}`
                      : noPhoto
                  }
                  alt={name}
                  width="150"
                />
                <h3>{name}</h3>
                <p>{character}</p>
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
}

export default Cast;
