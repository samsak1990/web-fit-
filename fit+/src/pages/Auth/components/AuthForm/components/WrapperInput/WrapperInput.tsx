// import React from 'react';
import styles from './WrapperInput.module.css';

const WrapperInput: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <div className={styles.wrapperInput}>{children}</div>;
};

export default WrapperInput;
