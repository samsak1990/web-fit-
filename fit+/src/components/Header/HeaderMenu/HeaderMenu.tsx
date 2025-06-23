import React from 'react';
import styles from './HeaderMenu.module.css';

type THeaderMenuProps = {};

const HeaderMenu: React.FC<THeaderMenuProps> = ({}) => {
  return <div className={styles.headerMenu}></div>;
};

export default HeaderMenu;
