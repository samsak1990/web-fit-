import React from 'react';
import styles from './RightControl.module.css';

interface RightControlProps {
    value: number;
    onChange: (idx: number) => void;
    options: string[];
}

const RightControl: React.FC<RightControlProps> = ({ value, onChange, options }) => {
    return (
        <div className={styles.switcher}>
            <div
                className={styles.switcherBg}
                style={{
                    transform: `translateX(${value * 100}%)`,
                    width: `calc(100% / ${options.length})`,
                }}
            />
            {options.map((label, idx) => (
                <button
                    key={label}
                    className={idx === value ? styles.active : ''}
                    onClick={() => onChange(idx)}
                    type="button"
                >
                    {label}
                </button>
            ))}
        </div>
    );
};

export default RightControl;