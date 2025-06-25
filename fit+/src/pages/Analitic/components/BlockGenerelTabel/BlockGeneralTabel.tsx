import React from 'react';
import styles from './BlockGeneralTabel.module.css';
import BlockTitle from '../../../../components/Block/components/BlockTitle/BlockTitle';
import DownloadTableButton from '../../../../components/Buttons/DownloadTable/DownloadTableButton';
import TabelGeneral from './TabelGeneral.tsx/TabelGeneral';

const BlockGeneralTabel = () => {
  const testData = [
    {
      id: '001',
      name: 'Иван Петров',
      loginDate: '2024-01-15',
      paymentDate: '2024-01-20',
      payments: '1500',
      income: '1200',
    },
    {
      id: '002',
      name: 'Мария Сидорова',
      loginDate: '2024-01-16',
      paymentDate: '2024-01-21',
      payments: '2000',
      income: '1800',
    },
    {
      id: '003',
      name: 'Алексей Козлов',
      loginDate: '2024-01-17',
      paymentDate: '2024-01-22',
      payments: '1200',
      income: '1000',
    },
    {
      id: '004',
      name: 'Елена Волкова',
      loginDate: '2024-01-18',
      paymentDate: '2024-01-23',
      payments: '3000',
      income: '2500',
    },
    {
      id: '001',
      name: 'Иван Петров',
      loginDate: '2024-01-15',
      paymentDate: '2024-01-20',
      payments: '1500',
      income: '1200',
    },
    {
      id: '002',
      name: 'Мария Сидорова',
      loginDate: '2024-01-16',
      paymentDate: '2024-01-21',
      payments: '2000',
      income: '1800',
    },
    {
      id: '003',
      name: 'Алексей Козлов',
      loginDate: '2024-01-17',
      paymentDate: '2024-01-22',
      payments: '1200',
      income: '1000',
    },
    {
      id: '004',
      name: 'Елена Волкова',
      loginDate: '2024-01-18',
      paymentDate: '2024-01-23',
      payments: '3000',
      income: '2500',
    },
  ];

  return (
    <div className={styles.blockGeneralTabel}>
      <div className={styles.blockGeneralTabel__header}>
        <BlockTitle title="Присоединившиеся" />
        <DownloadTableButton action={() => {}} />
      </div>
      <div className={styles.blockGeneralTabel__table}>
        <TabelGeneral data={testData} />
      </div>
    </div>
  );
};

export default BlockGeneralTabel;
