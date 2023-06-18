import { Link } from 'react-router-dom';
import styles from './MovieMoreDetails.module.css';

export function MovieMoreDetails() {
  return (
    <div>
      <h3 className={styles.MoreDetailsTitle}>Additional information</h3>
      <ul className={styles.MoreDetailsList}>
        <li className={styles['MoreDetailsList-item']}>
          <Link to="cast">
            <button className={styles['MoreDetailsList-btn']}>Cast</button>
          </Link>
        </li>
        <li className={styles['MoreDetailsList-item']}>
          <Link to="reviews">
            <button className={styles['MoreDetailsList-btn']}>Reviews</button>
          </Link>
        </li>
      </ul>
    </div>
  );
}
