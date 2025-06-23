import React from 'react'
import styles from './BlockTitle.module.css'

type TBlockTitleProps = {
    title: string
}

const BlockTitle: React.FC<TBlockTitleProps> = ({ title }) => {
    return (
        <h2 className={styles.blockTitle}>{title}</h2>
    )
}

export default BlockTitle