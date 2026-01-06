import styles from './Nav.module.scss';

const links = ['Home', 'About', 'Services', 'Contact']

export const Nav = () => {
  return (
    <nav>
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
