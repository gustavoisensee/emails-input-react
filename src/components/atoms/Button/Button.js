import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.module.css';

const Button = ({ text, onClick }) => (
  <button onClick={onClick} className={styles.button}>
    {text}
  </button>
);

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func
};

export default Button;