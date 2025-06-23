import React from 'react'
import styles from './WrapperInnerContent.module.css'

type Props = {
    children: React.ReactNode
}

const WrapperInnerContent = ({ children }: Props) => {
    return (
        <div className={styles.wrapperInnerContent}>{children}</div>
    )
}

export default WrapperInnerContent