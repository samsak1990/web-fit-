import React, { useState, useMemo } from 'react'
import styles from './BlockUsers.module.css'
import BlockTitle from '../Block/components/BlockTitle/BlockTitle'
import CenterControl from './components/CenterControl/CenterControl'
import RightControl from './components/RightControl/RightControl'
import Graph from './components/Graph/Graph'

const periodOptions = ['День', 'Неделя', 'Месяц'];
const months = [
    'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
    'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
];
const WEEKDAYS = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

// Генерируем данные для июня 2024
// const allDays = Array.from({ length: 30 }, (_, i) => {
//   const day = i + 1;
//   const value = Math.floor(Math.random() * 100);
//   const date = new Date(2024, 5, day); // июнь
//   const weekday = WEEKDAYS[date.getDay()];
//   return { name: String(day), value, weekday, date };
// });

const BlockUsers: React.FC = () => {
    const [period, setPeriod] = useState(2); // 0-день, 1-неделя, 2-месяц
    const [currentDate, setCurrentDate] = useState(new Date(2025, 5, 1));

    // СНАЧАЛА объявляем allDays!
    const allDays = useMemo(() => {
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        return Array.from({ length: daysInMonth }, (_, i) => {
            const day = i + 1;
            const value = Math.floor(Math.random() * 100);
            const date = new Date(year, month, day);
            const weekday = WEEKDAYS[date.getDay()];
            return { name: String(day), value, weekday, date };
        });
    }, [currentDate]);

    // ПОТОМ используем allDays
    const graphData = useMemo(() => {
        if (period === 0) {
            // День: 24 часа
            const hours = Array.from({ length: 24 }, (_, h) => {
                // Для примера: значения случайные
                const value = Math.floor(Math.random() * 100);
                return { name: String(h), value, hour: h };
            });
            return hours;
        }
        if (period === 1) {
            // Неделя
            const startOfWeek = new Date(currentDate);
            startOfWeek.setDate(currentDate.getDate() - currentDate.getDay());
            return Array.from({ length: 7 }, (_, i) => {
                const d = new Date(startOfWeek);
                d.setDate(startOfWeek.getDate() + i);
                const found = allDays.find(day => day.date.toDateString() === d.toDateString());
                return found || { name: String(d.getDate()), value: 0, weekday: WEEKDAYS[d.getDay()], date: d };
            });
        }
        // Месяц
        return allDays;
    }, [period, currentDate, allDays]);

    // Логика для CenterControl
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
        // Месяц
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
            <div className={styles.blockUsers__graphs}>
                <Graph data={graphData} />
            </div>
        </div>
    )
}

export default BlockUsers