import React, { useState, useMemo } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import CustomBarShape from './components/CustomBarShape/CustomBarShape';
import CustomTooltip from './components/CustomTooltip/CustomTooltip';
import styles from './Graph.module.css';

const WEEKDAYS = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

// Генерируем данные для всех дней месяца
const data = Array.from({ length: 31 }, (_, i) => {
  const day = i + 1;
  // Для примера: значения случайные
  const value = Math.floor(Math.random() * 100);
  // Определяем день недели для 2024-06 (или любого месяца)
  const date = new Date(2024, 5, day); // 5 — июнь (0-индексация)
  const weekday = WEEKDAYS[date.getDay()];
  return { name: String(day), value, weekday };
});

interface GraphDataItem {
  name: string;
  value: number;
  hour?: number;
  weekday?: string;
  date?: Date;
}

interface GraphProps {
  data: GraphDataItem[];
}

const BAR_SIZE = 28;

const Graph: React.FC<GraphProps> = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // MAX_VALUE определяется динамически
  const MAX_VALUE = useMemo(() => {
    if (!data.length) return 100;
    const max = Math.max(...data.map(d => d.value));
    return Math.ceil(max / 10) * 10;
  }, [data]);

  return (
    <div className={styles.graphWrapper}>
      <ResponsiveContainer width="100%" height={244}>
        <BarChart
          data={data}
          barCategoryGap={10}
          onMouseLeave={() => setActiveIndex(null)}
          margin={{ top: 10, right: 30, left: 0, bottom: 10 }}
        >
          <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="#e5e6fa" />
          <XAxis dataKey="name" tick={{ fontSize: 10 }} axisLine={false} tickLine={false} />
          <YAxis
            orientation="right"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 14 }}
            width={40}
            domain={[0, MAX_VALUE]}
          />
          <Tooltip content={<CustomTooltip />} cursor={false} />
          <Bar
            dataKey="value"
            shape={props => <CustomBarShape {...props} activeIndex={activeIndex} />}
            barSize={BAR_SIZE}
            isAnimationActive={false}
            onMouseEnter={(_, idx) => setActiveIndex(idx)}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Graph; 