import React from 'react';
import styles from './CustomTooltip.module.css';

const CustomTooltip = (props: any) => {
  const { active, payload } = props;
  if (active && payload && payload.length) {
    const weekday = payload[0].payload.weekday;
    return (
      <div className={styles.tooltip}>
        <div className={styles.tooltipLabel}>{weekday}</div>
        <div className={styles.tooltipValueRow}>
          <span className={styles.tooltipDot} />
          <span className={styles.tooltipValue}><b>Присоединилось: {payload[0].value} чел.</b></span>
        </div>
      </div>
    );
  }
  return null;
};

export default CustomTooltip; 