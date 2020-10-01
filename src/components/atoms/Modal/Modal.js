import React from 'react';
import styles from './style.module.css';

const Modal = ({ topContent, bottomContent }) => (
  <div className={styles.modal}>
    <div className={styles.topContainer}>
      {topContent}
    </div>
    <div className={styles.bottomContainer}>
      {bottomContent}
    </div>
  </div>
);

export default Modal;