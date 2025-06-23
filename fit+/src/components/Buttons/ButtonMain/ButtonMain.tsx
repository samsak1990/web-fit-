import React from 'react';
import styles from './ButtonMail.module.css';

type TButtonMainProps = {
  text: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  action?: () => void;
};

const ButtonMain: React.FC<TButtonMainProps> = ({
  text,
  type = 'button',
  action,
  disabled = false,
}) => {
  return (
    <button
      className={styles.buttonMain}
      type={type}
      onClick={action}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default ButtonMain;
