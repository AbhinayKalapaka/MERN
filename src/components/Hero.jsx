import React from 'react';
import styles from './Hero.module.css';

function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.content}>
        <h1>India's Most-loved Payments App</h1>
        <p>Recharge, pay bills, send money, and make secure payments anywhere in India.</p>
        <button className={styles.downloadButton}>Download PayClone</button>
      </div>
      <div className={styles.imageContainer}>
        <img 
          src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
          alt="Mobile payments"
        />
      </div>
    </div>
  );
}

export default Hero;