import styles from './Header.module.scss';
import { Nav } from '../NavComponent/Nav'

export const Header = () => {
  return (
    <header className={styles.header}>
      <h1>My Website</h1>
      <Nav />
    </header>
  )
}
