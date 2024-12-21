import React from 'react';
import LoginForm from '../components/LoginForm';
import styles from './LoginPage.module.css';

function LoginPage() {
  return (
    <div className={styles.loginPage}>
      <div className={styles.loginContainer}>
        <h1>PayClone</h1>
        <p>India's most-loved payments app</p>
        <LoginForm />
      </div>
    </div>
  );
}

export default LoginPage;