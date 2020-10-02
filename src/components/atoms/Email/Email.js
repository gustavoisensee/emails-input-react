/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, memo } from 'react';
import PropTypes from 'prop-types';
import styles from './style.module.css';

const Email = ({ id, text, valid, onDeleteClick }) => {
  const handleOnClick = useCallback(
    () => { onDeleteClick(id); },
    [id],
  );

  return (
    <div className={valid ? styles.containerMain : styles.containerError}>
      <span className={styles.text}>{text}</span>
      <span className={styles.remove} onClick={handleOnClick}>x</span>
    </div>
  );
};

Email.propTypes = {
  id: PropTypes.string,
  text: PropTypes.string,
  valid: PropTypes.bool,
  onDeleteClick: PropTypes.func
};

const areEqual = (prev, next) => (
  prev.id === next.id
);

export default memo(Email, areEqual);