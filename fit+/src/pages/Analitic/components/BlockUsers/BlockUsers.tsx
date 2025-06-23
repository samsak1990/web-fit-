import React from 'react'
import styles from './BlockUsers.module.css'
import BlockTitle from '../Block/components/BlockTitle/BlockTitle'

type TBlockUsersProps = []

const BlockUsers: React.FC<TBlockUsersProps> = () => {
    return (
        <div className={styles.blockUsers}>
            <div className={styles.blockUsers__controlsRow}>
                <BlockTitle title='Пользователи' />
                <div className={styles.blockUsers__controlsRow_}></div>
            </div>
            <div className={styles.blockUsers__graphs}></div>
        </div>

    )
}

export default BlockUsers