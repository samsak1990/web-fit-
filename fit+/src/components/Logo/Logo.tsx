import React from 'react';
import styles from './Logo.module.css';

type TLogoProps = {
  image: string;
};

const Logo: React.FC<TLogoProps> = ({ image }) => {
  return (
    <div className={styles.logo}>
      <img src={image} alt="логотип" className={styles.logo__image} />
    </div>
  );
};

export default Logo;
