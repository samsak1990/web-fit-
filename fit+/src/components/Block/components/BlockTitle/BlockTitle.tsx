import React from 'react'
import styles from './BlockTitle.module.css'

type TBlockTitleProps = {
    title: string,
    right?: boolean
}

const BlockTitle: React.FC<TBlockTitleProps> = ({ title, right }) => {
    return (
        <h2 className={`${styles.blockTitle} ${right ? styles.marginRight : ''}`}>{title}</h2>
    )
}

export default BlockTitle