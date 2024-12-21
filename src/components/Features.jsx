import React from 'react';
import styles from './Features.module.css';

function Features() {
  const features = [
    {
      title: "Mobile Recharge & DTH",
      description: "Instant recharge for any mobile number or DTH service in India"
    },
    {
      title: "Bill Payments",
      description: "Pay utility bills, credit cards, and more in seconds"
    },
    {
      title: "Instant Transfers",
      description: "Send money instantly to any bank account in India"
    },
    {
      title: "Secure Payments",
      description: "Bank-grade security for all your transactions"
    },
    {
      title: "Rewards & Cashback",
      description: "Earn rewards on every transaction you make"
    },
    {
      title: "Split Bills",
      description: "Split expenses with friends and family easily"
    }
  ];

  return (
    <div className={styles.features}>
      <h2>Everything You Need in One App</h2>
      <p>Discover why millions of Indians trust PayClone</p>
      <div className={styles.grid}>
        {features.map((feature, index) => (
          <div key={index} className={styles.card}>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Features;