import React, { useState, useEffect, useMemo } from 'react'
import styles from './BlockUsers.module.css'
import BlockTitle from '../Block/components/BlockTitle/BlockTitle'
import CenterControl from './components/CenterControl/CenterControl'
import RightControl from './components/RightControl/RightControl'

const periodOptions = ['День', 'Неделя', 'Месяц'];

// Генерация всех дней года
const months = [
    'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
    'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
];

function getAllDays(year = new Date().getFullYear()): string[] {
    const days: string[] = [];
    const date = new Date(year, 0, 1);
    while (date.getFullYear() === year) {
        days.push(`${date.getDate()} ${months[date.getMonth()]}`);
        date.setDate(date.getDate() + 1);
    }
    return days;
}

function getAllWeeks(daysArr: string[]): string[] {
    const weeks: string[] = [];
    for (let i = 0; i < daysArr.length; i += 7) {
        const start = daysArr[i];
        const end = daysArr[Math.min(i + 6, daysArr.length - 1)];
        weeks.push(`${start} - ${end}`);
    }
    return weeks;
}

const allDays = getAllDays();
const allWeeks = getAllWeeks(allDays);

// --- Вспомогательные функции для синхронизации ---
function getMonthIdxByDay(day: string): number {
    const [, month] = day.split(' ');
    return months.indexOf(month);
}
function getMonthIdxByWeek(week: string): number {
    const [start] = week.split(' - ');
    return getMonthIdxByDay(start);
}
function getWeekIdxByDay(dayIdx: number): number {
    return Math.floor(dayIdx / 7);
}
function getFirstDayIdxOfWeek(weekIdx: number): number {
    return weekIdx * 7;
}
function getFirstWeekIdxOfMonth(monthIdx: number): number {
    // ищем первую неделю, где первый день недели принадлежит месяцу
    for (let i = 0; i < allWeeks.length; i++) {
        const [start] = allWeeks[i].split(' - ');
        if (getMonthIdxByDay(start) === monthIdx) return i;
    }
    return 0;
}
function getFirstDayIdxOfMonth(monthIdx: number): number {
    // ищем первый день месяца
    for (let i = 0; i < allDays.length; i++) {
        if (getMonthIdxByDay(allDays[i]) === monthIdx) return i;
    }
    return 0;
}

function getCycledSetter(length: number, setFn: React.Dispatch<React.SetStateAction<number>>) {
    return {
        prev: () => setFn(idx => (idx === 0 ? length - 1 : idx - 1)),
        next: () => setFn(idx => (idx === length - 1 ? 0 : idx + 1)),
    };
}

const BlockUsers: React.FC = () => {
    const [period, setPeriod] = useState(2); // 0-день, 1-неделя, 2-месяц
    const [dayIdx, setDayIdx] = useState(allDays.length - 1);
    const [weekIdx, setWeekIdx] = useState(allWeeks.length - 1);
    const [monthIdx, setMonthIdx] = useState(new Date().getMonth());

    // Синхронизация индексов только при смене периода
    useEffect(() => {
        if (period === 0) {
            if (weekIdx !== undefined && weekIdx !== null) setDayIdx(getFirstDayIdxOfWeek(weekIdx));
            if (monthIdx !== undefined && monthIdx !== null) setDayIdx(getFirstDayIdxOfMonth(monthIdx));
        } else if (period === 1) {
            if (dayIdx !== undefined && dayIdx !== null) setWeekIdx(getWeekIdxByDay(dayIdx));
            if (monthIdx !== undefined && monthIdx !== null) setWeekIdx(getFirstWeekIdxOfMonth(monthIdx));
        } else if (period === 2) {
            if (dayIdx !== undefined && dayIdx !== null) setMonthIdx(getMonthIdxByDay(allDays[dayIdx]));
            if (weekIdx !== undefined && weekIdx !== null) setMonthIdx(getMonthIdxByWeek(allWeeks[weekIdx]));
        }
        // eslint-disable-next-line
    }, [period]);

    // Для отображения всегда вычисляем значения на лету
    const { start, end, onPrev, onNext } = useMemo(() => {
        if (period === 0) {
            const { prev, next } = getCycledSetter(allDays.length, setDayIdx);
            return { start: allDays[dayIdx], end: '', onPrev: prev, onNext: next };
        }
        if (period === 1) {
            const { prev, next } = getCycledSetter(allWeeks.length, setWeekIdx);
            const [start, end] = allWeeks[weekIdx].split(' - ').map(s => s.trim());
            return { start, end, onPrev: prev, onNext: next };
        }
        // period === 2
        const { prev, next } = getCycledSetter(months.length, setMonthIdx);
        const monthName = months[monthIdx][0].toUpperCase() + months[monthIdx].slice(1);
        return { start: monthName, end: '', onPrev: prev, onNext: next };
    }, [period, dayIdx, weekIdx, monthIdx]);

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