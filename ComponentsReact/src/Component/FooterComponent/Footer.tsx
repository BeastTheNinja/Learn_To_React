import styles from './Footer.module.scss';
import {FooterNav} from './FooterNav';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <FooterNav />
      <p className={styles.copy}>
        © 2026 Sebastian Larsen
      </p>
    </footer>
  );
}
