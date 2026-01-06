import { useState } from 'react';
import styles from './dropdown.module.scss';

const dropdownLinks = ['About', 'Services', 'Blog'];

export const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className={styles.dropdown}>
      <button className={styles.toggle} onClick={toggleDropdown}>
        Menu
      </button>
      
      <ul className={`${styles.menu} ${isOpen ? styles.open : ''}`}>
        {dropdownLinks.map(link => (
          <li key={link} className={styles.menuItem}>
            <a href={`#${link.toLowerCase()}`}>{link}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};
