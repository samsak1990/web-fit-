// import React from 'react'
import styles from './CenterControl.module.css'

interface CenterControlProps {
    periodType: string;
    start: string;
    end?: string;
    onPrev: () => void;
    onNext: () => void;
}

const CenterControl: React.FC<CenterControlProps> = ({ periodType, start, end, onPrev, onNext }) => {
    return (
        <div className={styles.blockUsers__controlsRow_center}>
            <button type='button' className={styles.center__left} onClick={onPrev}></button>
            <div className={styles.center__period}>
                {end ? (
                    <><span className={styles.center__period_start}>{start}</span> - <span className={styles.center__period_end}>{end}</span></>
                ) : (
                    <span className={styles.center__period_start}>{start}</span>
                )}
            </div>
            <button type='button' className={styles.center__right} onClick={onNext}></button>
        </div>
    )
}

export default CenterControl