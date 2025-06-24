import React, { useState, useMemo } from 'react'
import styles from './BlockUsers.module.css'
import BlockTitle from '../Block/components/BlockTitle/BlockTitle'
import CenterControl from './components/CenterControl/CenterControl'
import RightControl from './components/RightControl/RightControl'

const periodOptions = ['День', 'Неделя', 'Месяц'];
const months = [
    'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
    'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
];

const BlockUsers: React.FC = () => {
    const [period, setPeriod] = useState(2); // 0-день, 1-неделя, 2-месяц
    const [currentDate, setCurrentDate] = useState(new Date());

    const { start, end, onPrev, onNext } = useMemo(() => {
        const date = new Date(currentDate);
        
        if (period === 0) { // День
            const dayStr = `${date.getDate()} ${months[date.getMonth()]}`;
            return {
                start: dayStr,
                end: '',
                onPrev: () => setCurrentDate(prev => {
                    const newDate = new Date(prev);
                    newDate.setDate(newDate.getDate() - 1);
                    return newDate;
                }),
                onNext: () => setCurrentDate(prev => {
                    const newDate = new Date(prev);
                    newDate.setDate(newDate.getDate() + 1);
                    return newDate;
                })
            };
        }
        
        if (period === 1) { // Неделя
            const startOfWeek = new Date(date);
            startOfWeek.setDate(date.getDate() - date.getDay());
            const endOfWeek = new Date(startOfWeek);
            endOfWeek.setDate(startOfWeek.getDate() + 6);
            
            const startStr = `${startOfWeek.getDate()} ${months[startOfWeek.getMonth()]}`;
            const endStr = `${endOfWeek.getDate()} ${months[endOfWeek.getMonth()]}`;
            
            return {
                start: startStr,
                end: endStr,
                onPrev: () => setCurrentDate(prev => {
                    const newDate = new Date(prev);
                    newDate.setDate(newDate.getDate() - 7);
                    return newDate;
                }),
                onNext: () => setCurrentDate(prev => {
                    const newDate = new Date(prev);
                    newDate.setDate(newDate.getDate() + 7);
                    return newDate;
                })
            };
        }
        
        // period === 2 - Месяц
        const monthName = months[date.getMonth()][0].toUpperCase() + months[date.getMonth()].slice(1);
        return {
            start: monthName,
            end: '',
            onPrev: () => setCurrentDate(prev => {
                const newDate = new Date(prev);
                newDate.setMonth(newDate.getMonth() - 1);
                return newDate;
            }),
            onNext: () => setCurrentDate(prev => {
                const newDate = new Date(prev);
                newDate.setMonth(newDate.getMonth() + 1);
                return newDate;
            })
        };
    }, [period, currentDate]);

    return (
        <div className={styles.blockUsers}>
            <div className={styles.blockUsers__controlsRow}>
                <BlockTitle title='Пользователи' />
                <CenterControl
                    periodType={periodOptions[period]}
                    start={start}
                    end={end}
                    onPrev={onPrev}
                    onNext={onNext}
                />
                <RightControl value={period} onChange={setPeriod} options={periodOptions} />
            </div>
            <div className={styles.blockUsers__graphs}>ГРАФЫ</div>
        </div>
    )
}

export default BlockUsers