import styles from './Header.module.scss';
import { Nav } from '../NavComponent/Nav';
import { Dropdown } from '../Dropdown/Dropdown';

export const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>My Website</h1>
      <nav className={styles.navWrapper}>
        <Nav />
        <Dropdown />
      </nav>
    </header>
  );
};
