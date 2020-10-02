import React, { memo } from 'react';
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

const areEqual = (prev, next) => (
  prev.text === next.text
);

export default memo(Button, areEqual);