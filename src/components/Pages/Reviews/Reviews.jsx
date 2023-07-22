import { useState, useEffect, useLayoutEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'services/movies-api-set';
import styles from './Reviews.module.css';

export function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchMovieReviews(movieId).then(data => {
      setReviews(data.results);
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
  }, [reviews]);

  return (
    <>
      {reviews.length > 0 ? (
        <>
          <hr />
          <ul>
            {reviews.map(({ author, content, id }) => (
              <li className={styles['ReviewsList-item']} key={id}>
                <h3 className={styles['ReviewsList-item--author']}>
                  Author: {author}
                </h3>
                <p className={styles['ReviewsList-item--content']}>{content}</p>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <p className={styles.NoReviews}>No reviews found</p>
      )}
    </>
  );
}

export default Reviews;
