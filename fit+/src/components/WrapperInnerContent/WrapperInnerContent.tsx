import React from 'react'
import styles from './WrapperInnerContent.module.css'

type Props = {
    children: React.ReactNode,
    flexDirection?: 'row' | 'column',
}

const WrapperInnerContent = ({ children, flexDirection = 'column' }: Props) => {
    return (
        <div
            className={styles.wrapperInnerContent}
            style={{ flexDirection, display: 'flex' }}
        >
            {children}
        </div>
    )
}

export default WrapperInnerContent