import React from 'react';
import styles from './Input.module.css';

type TInputProps = {
  placeholder: string;
};

const Input: React.FC<TInputProps> = ({ placeholder }) => {
  return <input className={styles.input} placeholder={placeholder} />;
};

export default Input;
