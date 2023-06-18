import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

export function Navigation() {
  return (
    <nav className={styles.Nav}>
      <span>Super Movies</span>
      <NavLink
        className={({ isActive }) =>
          isActive ? styles['Nav-link--active'] : styles['Nav-link']
        }
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? styles['Nav-link--active'] : styles['Nav-link']
        }
        to="/movies"
      >
        Movies
      </NavLink>
    </nav>
  );
}
