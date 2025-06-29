import React from 'react';
import styles from './BlockGeneralTabel.module.css';
import BlockTitle from '../../../../components/Block/components/BlockTitle/BlockTitle';
import DownloadTableButton from '../../../../components/Buttons/DownloadTable/DownloadTableButton';
import TabelGeneral from './TabelGeneral.tsx/TabelGeneral';

type BlockGeneralTabelProps = {
  data: Array<{
    id: string;
    name: string;
    loginDate: string;
    paymentDate: string;
    payments: string;
    income: string;
  }>;
};

const BlockGeneralTabel: React.FC<BlockGeneralTabelProps> = ({ data }) => {
  return (
    <div className={styles.blockGeneralTabel}>
      <div className={styles.blockGeneralTabel__header}>
        <BlockTitle title="Присоединившиеся" />
        <DownloadTableButton action={() => { }} />
      </div>
      <div className={styles.blockGeneralTabel__table}>
        <TabelGeneral data={data} />
      </div>
    </div>
  );
};

export default BlockGeneralTabel;
