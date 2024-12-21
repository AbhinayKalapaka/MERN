import React from 'react';
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.grid}>
        <div className={styles.company}>
          <h3>PayClone</h3>
          <p>India's most-loved payments app</p>
        </div>
        
        <div className={styles.links}>
          <h4>Company</h4>
          <a href="#">About Us</a>
          <a href="#">Careers</a>
          <a href="#">Blog</a>
        </div>
        
        <div className={styles.links}>
          <h4>Help & Support</h4>
          <a href="#">FAQs</a>
          <a href="#">Contact Us</a>
          <a href="#">Security</a>
        </div>
        
        <div className={styles.social}>
          <h4>Connect With Us</h4>
          <div className={styles.socialLinks}>
            <a href="#">Twitter</a>
            <a href="#">Facebook</a>
            <a href="#">Instagram</a>
          </div>
        </div>
      </div>
      
      <div className={styles.copyright}>
        <p>&copy; {new Date().getFullYear()} PayClone. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;