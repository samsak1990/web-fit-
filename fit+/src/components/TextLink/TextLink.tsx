import React, { useState } from 'react';
import styles from './TextLink.module.css';

type TTextLinkProps = {
  text: string;
};

const TextLink: React.FC<TTextLinkProps> = ({ text }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <span className={`${styles.textLink} ${isActive ? styles.inactive : null}`}>
      <a href="#" onClick={() => setIsActive}>
        {text}
      </a>
    </span>
  );
};

export default TextLink;
