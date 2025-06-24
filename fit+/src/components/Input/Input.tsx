import React from 'react';
import styles from './Input.module.css';

type TInputProps = {
  placeholder: string;
  value: string;
  setValue(value: string): void;
  error?: string;
  secret?: boolean;
  noStyle?: boolean;
};

const Input: React.FC<TInputProps> = ({ placeholder, value, setValue, error = "", secret = false, noStyle = false }) => {

  const [open, setOpen] = React.useState<boolean>(false);

  function updateOpen(): void {
    if (error === "" && value !== "" && secret) {
      setOpen(prev => !prev);
    }
  }

  let type = "text";

  if (secret && !open) {
    type = "password";
  }

  return (
    <div className={styles.input__wrapper}>
      <input
        className={styles.input + (error === "" ? "" : " " + styles.input_error) + (noStyle ? " " + styles.input_noStyle : "")}
        placeholder={placeholder}
        value={value}
        onChange={e => setValue(e.target.value)}
        type={type}
      />
      <div className={
        styles.input__info +
        ((error !== "" && value !== "") ? " " + styles.input__info_error : "") +
        ((error !== "" && value === "") ? " " + styles.input__info_warning : "") +
        ((error === "" && value !== "" && secret && open) ? " " + styles.input__info_open : "") +
        ((error === "" && value !== "" && secret && !open) ? " " + styles.input__info_closed : "")
      }
        onClick={updateOpen}
      ></div>
      <div className={styles.error + (error === "" ? "" : " " + styles.error_show)}>
        {error}
      </div>
    </div>
  );
};

export default Input;
