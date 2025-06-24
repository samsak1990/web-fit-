import React from 'react'
import styles from './SortArrows.module.css'

type TSortArrowsProps = {
    sort: 'asc' | 'desc'
}

const SortArrows: React.FC<TSortArrowsProps> = ({sort}) => {
  return (
    <div className={styles.sortArrows}>
        <span className={`${styles.sortArrows__arrowUp} ${styles.sortArrows__arrow} ${sort === 'asc' ? styles.sortArrows__arrowActive : ''}`}></span>
        <span className={`${styles.sortArrows__arrowDown} ${styles.sortArrows__arrow} ${sort === 'desc' ? styles.sortArrows__arrowActive : ''}`}></span>  
    </div>
  )
}

export default SortArrows