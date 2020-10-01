import React, { useCallback, memo } from 'react';
import PropTypes from 'prop-types';
import styles from './style.module.css';

const Email = ({ id, text, valid, onDeleteClick }) => {
  const handleOnClick = useCallback(
    () => { onDeleteClick(id); },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [id],
  );

  return (
    <div className={valid ? styles.containerMain : styles.containerError}>
      <span className={styles.text}>{valid ? text : 'Invalid email'}</span>
      <span className={styles.remove} onClick={handleOnClick}>x</span>
    </div>
  );
};

Email.defaultProps = {
  id: '',
  text: '',
  valid: true,
  onDeleteClick: null
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