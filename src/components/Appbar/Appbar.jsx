import { Outlet } from 'react-router-dom';
import { Navigation } from 'components/Navigation';
import styles from './Appbar.module.css';

export function Appbar() {
  return (
    <>
      <header className={styles.Header}>
        <div className={styles['Header-container']}>
          <Navigation />
        </div>
      </header>
      <Outlet />
    </>
  );
}
