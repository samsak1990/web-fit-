import React from 'react';
import styles from './ModalPayments.module.css';
import TgIcon from '../../assets/icons/tg.svg';

interface ModalPaymentsProps {
    isOpen: boolean;
    onClose: () => void;
}

const ModalPayments: React.FC<ModalPaymentsProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div className={styles.overlay} onClick={handleOverlayClick}>
            <div className={styles.modal}>
                <div className={styles.header}>
                    <span className={styles.title}>Выплаты</span>
                    <button className={styles.close} onClick={onClose} aria-label="Закрыть окно">×</button>
                </div>
                <div className={styles.body}>
                    <p className={styles.text}>
                        По выплатам обращаться к
                        <img src={TgIcon} alt="Telegram" className={styles.tgIcon} />
                        <a
                            href="https://t.me/Fit_support1"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.link}
                        >
                            @Fit_support1
                        </a>
                    </p>
                    <button className={styles.ok} onClick={onClose}>Хорошо</button>
                </div>
            </div>
        </div>
    );
};

export default ModalPayments; 