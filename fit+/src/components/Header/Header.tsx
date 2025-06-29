// import React from 'react';
import styles from './Header.module.css';
import WrapperInnerContent from '../WrapperInnerContent/WrapperInnerContent';
import Profile from './Profile/Profile';
// import HeaderMenu from './HeaderMenu/HeaderMenu';
import Account from './Account/Account';
// import { HEADER_NAV_LIST } from '../../constants/headerMenuList';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <WrapperInnerContent flexDirection='row'>
        <Profile userName='Pavel' />
        {/* <HeaderMenu navList={HEADER_NAV_LIST} /> */}
        <Account sum={250000} people={345} />
      </WrapperInnerContent>
    </header>
  )
};

export default Header;
