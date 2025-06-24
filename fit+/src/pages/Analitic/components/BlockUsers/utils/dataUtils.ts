const WEEKDAYS = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

export function getAllDays(year: number, month: number) {
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  return Array.from({ length: daysInMonth }, (_, i) => {
    const day = i + 1;
    const value = Math.floor(Math.random() * 100);
    const date = new Date(year, month, day);
    const weekday = WEEKDAYS[date.getDay()];
    return { name: String(day), value, weekday, date };
  });
}

export function getHours() {
  return Array.from({ length: 24 }, (_, h) => ({
    name: String(h),
    value: Math.floor(Math.random() * 100),
    hour: h
  }));
} 