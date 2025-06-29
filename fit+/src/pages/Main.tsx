// import React from 'react';
import { Outlet } from 'react-router-dom';
// import styles from './Main.module.css'
import Header from '../components/Header/Header';
import WrapperContent from '../components/WrapperContent/WrapperContent';


const Main: React.FC = () => {
  return (
    <WrapperContent>
      <Header />
      <main style={{ flex: 1 }}>
        <Outlet />
      </main>
      {/* <Footer /> */}
    </WrapperContent>
  );
};

export default Main; 