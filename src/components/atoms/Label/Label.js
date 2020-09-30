import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styles from './style.module.css';

const Label = ({ text, valid, onDeleteClick }) => (
  <div className={valid ? styles.containerMain : styles.containerError}>
    <span className={styles.text}>{text}</span>
    <span className={styles.remove} onClick={onDeleteClick}>x</span>
  </div>
);

Label.defaultProps = {
  text: '',
  valid: true,
  onDeleteClick: null
};

Label.propTypes = {
  text: PropTypes.string,
  valid: PropTypes.bool,
  onDeleteClick: PropTypes.func
};

const areEqual = (prevProps, nextProps) => (
  prevProps.text === nextProps.text
);

export default memo(Label, areEqual);