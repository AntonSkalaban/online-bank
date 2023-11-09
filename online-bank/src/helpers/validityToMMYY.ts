export const validityToMMYY = (dateStr: string, period: number) => {
  const date = new Date(dateStr);
  date.setMonth(date.getMonth() + period);
  return `${date.getMonth()}.${date.getFullYear().toString().substring(2)}`;
};
