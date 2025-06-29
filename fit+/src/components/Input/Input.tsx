import React from 'react';
import styles from './Input.module.css';

type TInputProps = {
  placeholder: string;
  value: string;
  setValue(value: string): void;
  error?: string;
  secret?: boolean;
  noStyle?: boolean;
  invalid?: boolean;
};

const Input: React.FC<TInputProps> = ({ placeholder, value, setValue, error = "", secret = false, noStyle = false, invalid = false }) => {

  let type = "text";

  if (secret) {
    type = "password";
  }

  // Определяем тип ошибки
  const isRequiredError = error === 'Введите логин' || error === 'Введите пароль';
  const isInvalidError = invalid;

  return (
    <div className={styles.input__wrapper}>
      <input
        className={
          styles.input +
          (isRequiredError ? ' ' + styles.input_required : '') +
          (isInvalidError ? ' ' + styles.input_error : '') +
          (noStyle ? ' ' + styles.input_noStyle : '')
        }
        placeholder={placeholder}
        value={value}
        onChange={e => setValue(e.target.value)}
        type={type}
      />
      {/* Звезда справа только для обязательного поля */}
      {isRequiredError && !isInvalidError && (
        <div className={styles.input__info + ' ' + styles.input__info_star}></div>
      )}
      {/* Круг с восклицательным знаком только для неверного ввода */}
      {isInvalidError && !isRequiredError && (
        <div className={styles.input__info + ' ' + styles.input__info_warning}></div>
      )}
      {/* Текст ошибки справа только для обязательного поля */}
      <div className={
        styles.error +
        (isRequiredError ? ' ' + styles.error_show : '')
      }>
        {isRequiredError ? error : ''}
      </div>
    </div>
  );
};

export default Input;
