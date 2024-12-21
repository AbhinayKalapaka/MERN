import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import styles from './Navbar.module.css';

function Navbar() {
  const { logout } = useAuth();

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>PayClone</div>
      <div className={styles.menu}>
        <a href="#" className={styles.menuItem}>Mobile Recharge</a>
        <a href="#" className={styles.menuItem}>Pay Bills</a>
        <a href="#" className={styles.menuItem}>Send Money</a>
        <a href="#" className={styles.menuItem}>Scan & Pay</a>
      </div>
      <button onClick={logout} className={styles.logoutButton}>Logout</button>
    </nav>
  );
}

export default Navbar;