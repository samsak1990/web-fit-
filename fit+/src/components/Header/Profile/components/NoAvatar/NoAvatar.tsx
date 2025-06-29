// import React from 'react'
import styles from './NoAvatar.module.css'

type TNoAvatarProps = {
    userName: string
}

const NoAvatar: React.FC<TNoAvatarProps> = ({ userName }) => {
    return (
        <h2 className={styles.noAvatar}> {userName[0].toUpperCase()}</h2 >
    )
}

export default NoAvatar