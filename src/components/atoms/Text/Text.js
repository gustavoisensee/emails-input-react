import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styles from './style.module.css';

const Text = ({ children, bold }) => (
  <span className={bold ? styles.textBold : styles.text}>
    {children}
  </span>
);

Text.propTypes = {
  children: PropTypes.string
};

const areEqual = (prev, next) => (
  prev.text === next.text
);

export default memo(Text, areEqual);