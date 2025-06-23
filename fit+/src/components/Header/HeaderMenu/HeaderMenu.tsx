import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './HeaderMenu.module.css';

type THeaderMenuItem = {
  title: string;
  path: string;
};

type THeaderMenuProps = {
  navList: THeaderMenuItem[];
};

const HeaderMenu: React.FC<THeaderMenuProps> = ({ navList }) => {
  return (
    <div className={styles.headerMenu}>
      {navList.map((item) => (
        <NavLink
          key={item.title}
          to={item.path}
          className={({ isActive }) =>
            isActive
              ? `${styles.headerMenu__link} ${styles.active}`
              : styles.headerMenu__link
          }
        >
          {item.title}
        </NavLink>
      ))}
    </div>
  );
};

export default HeaderMenu;
