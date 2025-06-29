import React, { useState, useMemo } from 'react';
import styles from './TabelGeneral.module.css';
import SortArrows from '../../../../../pages/Payments/components/TablePayments/SortArrows/SortArrows';

type TGeneralRow = {
  id: string;
  name: string;
  loginDate: string;
  paymentDate: string;
  payments: string;
  income: string;
};

type SortBy = 'id' | 'name' | 'loginDate' | 'paymentDate' | 'payments' | 'income' | null;
type SortDir = 'asc' | 'desc' | null;

type TTabelGeneralProps = {
  data: TGeneralRow[];
};

const TabelGeneral: React.FC<TTabelGeneralProps> = ({ data }) => {
  const [sortBy, setSortBy] = useState<SortBy>(null);
  const [sortDir, setSortDir] = useState<SortDir>(null);

  const handleSort = (column: Exclude<SortBy, null>) => {
    if (sortBy !== column) {
      setSortBy(column);
      setSortDir('asc');
    } else if (sortDir === 'asc') {
      setSortDir('desc');
    } else if (sortDir === 'desc') {
      setSortBy(null);
      setSortDir(null);
    } else {
      setSortDir('asc');
    }
  };

  const sortedData = useMemo(() => {
    if (!sortBy || !sortDir) return data;
    const sorted = [...data].sort((a, b) => {
      let aValue: string | number = a[sortBy];
      let bValue: string | number = b[sortBy];
      if (sortBy === 'payments' || sortBy === 'income') {
        aValue = Number(aValue);
        bValue = Number(bValue);
      }
      if (aValue < bValue) return sortDir === 'asc' ? -1 : 1;
      if (aValue > bValue) return sortDir === 'asc' ? 1 : -1;
      return 0;
    });
    return sorted;
  }, [data, sortBy, sortDir]);

  return (
    <div className={styles.tableWrapper}>
      <table className={styles.tableGeneral}>
        <thead>
          <tr>
            <th>
              ID
            </th>
            <th>
              Имя
            </th>
            <th>
              Дата входа
            </th>
            <th onClick={() => handleSort('paymentDate')} style={{ cursor: 'pointer' }}>
              Дата оплаты <SortArrows sort={sortBy === 'paymentDate' ? (sortDir as 'asc' | 'desc' | undefined) : undefined} />
            </th>
            <th onClick={() => handleSort('payments')} style={{ cursor: 'pointer' }}>
              Опалаты <SortArrows sort={sortBy === 'payments' ? (sortDir as 'asc' | 'desc' | undefined) : undefined} />
            </th>
            <th onClick={() => handleSort('income')} style={{ cursor: 'pointer' }}>
              Доход <SortArrows sort={sortBy === 'income' ? (sortDir as 'asc' | 'desc' | undefined) : undefined} />
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((item, i) => (
            <tr key={i}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.loginDate}</td>
              <td>{item.paymentDate}</td>
              <td>{item.payments}</td>
              <td>{item.income}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TabelGeneral;
