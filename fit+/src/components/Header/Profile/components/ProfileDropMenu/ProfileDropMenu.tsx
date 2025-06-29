import React from 'react'
import styles from './ProfileDropMenu.module.css'
import { type IDropMenu } from '../../../../../constants/profileDropMenuList'
import { NavLink, useNavigate } from 'react-router-dom'

type ProfileDropMenuProps = {
    navList: IDropMenu[],
    isOpen: boolean,
    onMenuItemClick?: (title: string) => void
}

export default function ProfileDropMenu({ navList, isOpen, onMenuItemClick }: ProfileDropMenuProps) {
    const navigate = useNavigate();
    return (
        <div className={isOpen ? `${styles.dropMenu} ${styles.open}` : styles.dropMenu}>
            {navList.map(item => {
                if (item.title === 'Выплаты' && onMenuItemClick) {
                    return (
                        <p className={styles.dropMenu__link} key={item.title} onClick={() => onMenuItemClick(item.title)} style={{ cursor: 'pointer' }}>
                            <img src={item.icon} alt="Иконка" />
                            <span>{item.title}</span>
                        </p>
                    )
                }
                if (item.title === 'Выход') {
                    return (
                        <p className={styles.dropMenu__link} key={item.title} onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
                            <img src={item.icon} alt="Иконка" />
                            <span>{item.title}</span>
                        </p>
                    )
                }
                if (item.title === 'Тех. поддержка') {
                    return (
                        <p className={styles.dropMenu__link} key={item.title} style={{ cursor: 'default' }}>
                            <img src={item.icon} alt="Иконка" />
                            <span>{item.title}</span>
                        </p>
                    )
                }
                return (
                    <p className={styles.dropMenu__link} key={item.title}>
                        <img src={item.icon} alt="Иконка" />
                        <NavLink to={item.path}>
                            {item.title}
                        </NavLink>
                    </p>
                )
            })}
        </div>
    )
}