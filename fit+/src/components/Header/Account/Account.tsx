// import React from 'react';
import styles from './Account.module.css';

type TAccountProps = {
  sum: number,
  people: number
};

const Account: React.FC<TAccountProps> = ({ sum = 0, people = 0 }) => {
  return (
    <div className={styles.account}>
      <div className={styles.account__summ}>{sum}₽</div>
      <div className={styles.account__people}>{people}</div>
    </div>
  )
};

export default Account;
