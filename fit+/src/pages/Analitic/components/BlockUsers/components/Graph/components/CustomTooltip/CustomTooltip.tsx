import styles from './CustomTooltip.module.css';

const CustomTooltip = (props: any) => {
  const { active, payload } = props;
  if (active && payload && payload.length) {
    const hour = payload[0].payload.hour;
    const weekday = payload[0].payload.weekday;
    const label = typeof hour === 'number' ? `${hour}:00` : weekday;
    return (
      <div className={styles.tooltip}>
        <div className={styles.tooltipLabel}>{label}</div>
        <div className={styles.tooltipValueRow}>
          <span className={styles.tooltipDot} />
          <span className={styles.tooltipValue}>
            <b>Присоединилось: {payload[0].value} чел.</b>
          </span>
        </div>
      </div>
    );
  }
  return null;
};

export default CustomTooltip;
