import styles from './footernav.module.scss';

export const FooterNav = () => {

    const links = ['Privacy', 'Terms', 'Contact'];

  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        {links.map(link => (
          <li key={link} className={styles.navItem}>{link}</li>
        ))}
      </ul>
    </nav>
  );
}
