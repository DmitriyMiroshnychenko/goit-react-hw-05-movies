import { Oval } from 'react-loader-spinner';
import styles from './Loader.module.css';

export function Loader() {
  return (
    <div className={styles.Loader}>
      <Oval
        ariaLabel="loading-indicator"
        height={100}
        width={100}
        strokeWidth={5}
        color="var(--theme-color)"
        secondaryColor="#ccc"
      />
    </div>
  );
}
