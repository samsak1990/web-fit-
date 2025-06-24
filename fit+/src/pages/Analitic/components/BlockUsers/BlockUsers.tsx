import React, { useState, useMemo } from 'react'
import styles from './BlockUsers.module.css'
import BlockTitle from '../Block/components/BlockTitle/BlockTitle'
import CenterControl from './components/CenterControl/CenterControl'
import RightControl from './components/RightControl/RightControl'
import Graph from './components/Graph/Graph'
import { getAllDays, getHours } from './utils/dataUtils'

const periodOptions = ['День', 'Неделя', 'Месяц'];
const months = [
    'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
    'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
];
const WEEKDAYS = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

const BlockUsers: React.FC = () => {
    const [period, setPeriod] = useState(2); // 0-день, 1-неделя, 2-месяц
    const [currentDate, setCurrentDate] = useState(new Date(2025, 5, 1));

    const allDays = useMemo(
        () => getAllDays(currentDate.getFullYear(), currentDate.getMonth()),
        [currentDate]
    );

    const graphData = useMemo(() => {
        if (period === 0) return getHours();
        if (period === 1) {
            const startOfWeek = new Date(currentDate);
            startOfWeek.setDate(currentDate.getDate() - currentDate.getDay());
            return Array.from({ length: 7 }, (_, i) => {
                const d = new Date(startOfWeek);
                d.setDate(startOfWeek.getDate() + i);
                const found = allDays.find(day => day.date.toDateString() === d.toDateString());
                return found || { name: String(d.getDate()), value: 0, weekday: WEEKDAYS[d.getDay()], date: d };
            });
        }
        return allDays;
    }, [period, currentDate, allDays]);

    const { start, end, onPrev, onNext } = useMemo(() => {
        const date = new Date(currentDate);
        if (period === 0) {
            const dayStr = `${date.getDate()} ${months[date.getMonth()]}`;
            return {
                start: dayStr,
                end: '',
                onPrev: () => setCurrentDate(prev => new Date(prev.setDate(prev.getDate() - 1))),
                onNext: () => setCurrentDate(prev => new Date(prev.setDate(prev.getDate() + 1)))
            };
        }
        if (period === 1) {
            const startOfWeek = new Date(date);
            startOfWeek.setDate(date.getDate() - date.getDay());
            const endOfWeek = new Date(startOfWeek);
            endOfWeek.setDate(startOfWeek.getDate() + 6);
            return {
                start: `${startOfWeek.getDate()} ${months[startOfWeek.getMonth()]}`,
                end: `${endOfWeek.getDate()} ${months[endOfWeek.getMonth()]}`,
                onPrev: () => setCurrentDate(prev => new Date(prev.setDate(prev.getDate() - 7))),
                onNext: () => setCurrentDate(prev => new Date(prev.setDate(prev.getDate() + 7)))
            };
        }
        const monthName = months[date.getMonth()][0].toUpperCase() + months[date.getMonth()].slice(1);
        return {
            start: monthName,
            end: '',
            onPrev: () => setCurrentDate(prev => new Date(prev.setMonth(prev.getMonth() - 1))),
            onNext: () => setCurrentDate(prev => new Date(prev.setMonth(prev.getMonth() + 1)))
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
            <div className={styles.blockUsers__graphs}>
                <Graph data={graphData} />
            </div>
        </div>
    )
}

export default BlockUsers