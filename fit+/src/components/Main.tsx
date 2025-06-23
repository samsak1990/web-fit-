import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header/Header';
import WrapperContent from './WrapperContent/WrapperContent';


const Main: React.FC = () => {
  return (
    <WrapperContent>
      <Header />
      <main style={{flex: 1}}>
        <Outlet />
        </main>
      {/* <Footer /> */}
    </WrapperContent>
  );
};

export default Main; 