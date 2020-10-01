import React from 'react';
import styles from './style.module.css';

const EmailContainer = ({ children }) => (
  <div className={styles.container}>
    {children}
  </div>
);

export default EmailContainer;