import React from 'react'
import styles from './ProfileDropMenu.module.css'
import { type IDropMenu } from '../../../../../constants/profileDropMenuList'
import { NavLink } from 'react-router-dom'

type ProfileDropMenuProps = {
    navList: IDropMenu[],
    isOpen: boolean
}

export default function ProfileDropMenu({ navList, isOpen }: ProfileDropMenuProps) {
    return (
        <div className={isOpen ? `${styles.dropMenu} ${styles.open}` : styles.dropMenu}>
            {navList.map(item => {
                return <p className={styles.dropMenu__link} key={item.title}>
                    <img src={item.icon} alt="Иконка" />
                    <NavLink to={item.path}>
                        {item.title}
                    </NavLink>
                </p>
            })}
        </div>
    )
}