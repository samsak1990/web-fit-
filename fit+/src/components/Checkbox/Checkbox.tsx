import React, { useState } from 'react';
import styles from './Checkbox.module.css';

type CheckboxProps = {
  label: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
};

const CustomCheckbox: React.FC<CheckboxProps> = ({
  label,
  checked: initial = false,
  onChange,
}) => {
  const [checked, setChecked] = useState(initial);

  const toggle = () => {
    const next = !checked;
    setChecked(next);
    onChange?.(next);
  };

  return (
    <label className={styles.wrapper}>
      <div
        className={`${styles.box} ${checked ? styles.checkedBox : ''}`}
        onClick={toggle}
      >
        {checked && (
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="black"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20 6L9 17L4 12" />
          </svg>
        )}
      </div>
      <span className={styles.label}>{label}</span>
    </label>
  );
};

export default CustomCheckbox;
