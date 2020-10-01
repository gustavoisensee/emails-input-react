import React from 'react';
import styles from './style.module.css';

const Input = (props) => (
  <input type='text' className={styles.input} {...props} />
);

export default Input;