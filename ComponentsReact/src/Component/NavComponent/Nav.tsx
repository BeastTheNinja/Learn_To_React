import styles from './Nav.module.scss';

const links = ['Home', 'Projects', 'Contact'];

export const Nav = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        {links.map(link => (
          <li key={link} className={styles.navItem}>
            <a href={`#${link.toLowerCase()}`}>{link}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
