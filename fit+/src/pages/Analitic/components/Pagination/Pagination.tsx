// import React from 'react';
import styles from './Pagination.module.css';
import ArrowLeftDouble from '../../../../assets/arrows-control/arrow-left-double.svg';
import ArrowLeft from '../../../../assets/arrows-control/arrow-left.svg';
import ArrowRight from '../../../../assets/arrows-control/arrow-right.svg';
import ArrowRightDouble from '../../../../assets/arrows-control/arrow-right-double.svg';

interface PaginationProps {
    page: number;
    total: number;
    onPage: (p: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ page, total, onPage }) => (
    <div className={styles.paginationWrapper}>
        <span className={styles.paginationText}>Страница {page + 1} из {total}</span>
        <div className={styles.paginationBtns}>
            <button onClick={() => onPage(0)} disabled={page === 0} className={styles.paginationBtn}>
                <img src={ArrowLeftDouble} alt="В начало" />
            </button>
            <button onClick={() => onPage(page - 1)} disabled={page === 0} className={styles.paginationBtn}>
                <img src={ArrowLeft} alt="Назад" />
            </button>
            <span className={styles.paginationDivider}>|</span>
            <button onClick={() => onPage(page + 1)} disabled={page === total - 1} className={styles.paginationBtn}>
                <img src={ArrowRight} alt="Вперёд" />
            </button>
            <button onClick={() => onPage(total - 1)} disabled={page === total - 1} className={styles.paginationBtn}>
                <img src={ArrowRightDouble} alt="В конец" />
            </button>
        </div>
    </div>
);

export default Pagination; 