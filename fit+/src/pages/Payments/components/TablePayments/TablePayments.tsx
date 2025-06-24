import React, { useState, useMemo } from 'react';
import styles from './TablePayments.module.css';
import type { TRow } from '../../Payments';
import SortArrows from './SortArrows/SortArrows';


type SortBy = 'date' | 'amount' | 'status' | null;
type SortDir = 'asc' | 'desc' | null;

const TablePayments: React.FC<{ data: TRow[] }> = ({ data }) => {
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
      let aValue = a[sortBy];
      let bValue = b[sortBy];
      if (sortBy === 'amount') {
        aValue = Number(aValue);
        bValue = Number(bValue);
      }
      if (aValue < bValue) return sortDir === 'asc' ? -1 : 1;
      if (aValue > bValue) return sortDir === 'asc' ? 1 : -1;
      return 0;
    });
    return sorted;
  }, [data, sortBy, sortDir]);

  const handleSelectStatus = (status: string) => {
    switch (status) {
      case 'Выполнено':
        return styles.statusDone;
      case 'Ожидается':
        return styles.statusPending;
      case 'Создано':
        return styles.statusCreated;
      default:
        return '';
    }
  };

  return (<div className={styles.tableWrapper}>
    <table className={styles.tablePayments}>
      <thead>
        <tr>
          <th onClick={() => handleSort('date')}>
            Дата <SortArrows sort={sortBy === 'date' ? (sortDir as 'asc' | 'desc' | undefined) : undefined} />
          </th>
          <th onClick={() => handleSort('amount')}>
            Сумма <SortArrows sort={sortBy === 'amount' ? (sortDir as 'asc' | 'desc' | undefined) : undefined} />
          </th>
          <th onClick={() => handleSort('status')}>
            Статус <SortArrows sort={sortBy === 'status' ? (sortDir as 'asc' | 'desc' | undefined) : undefined} />
          </th>
        </tr>
      </thead>
      <tbody>
        {sortedData.map((item, i) => (
          <tr key={i}>
            <td>{item.date}</td>
            <td>{item.amount}</td>
            <td className={styles.statusCell}>
              <span className={`${styles.statusCell__icon} ${handleSelectStatus(item.status)}`}></span>
              {item.status}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>)
};

export default TablePayments; 