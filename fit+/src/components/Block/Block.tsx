import React from 'react'
import styles from './Block.module.css'


type TBlockProps = {
    children: React.ReactNode,
    direction?: 'row' | 'column'
}

const Block: React.FC<TBlockProps> = ({ children, direction = 'row' }) => {
    return (
        <div 
            className={`${styles.block} ${direction !== 'row' ? styles.direction_column : null}`}
            style={{
                flexDirection: direction === 'row' ? 'row' : 'column',
            }}
        >
            {children}
        </div>
    )
}

export default Block