import { OperationsData } from "type";

export const validityToMMYY = (dateStr: string, period: number) => {
  const date = new Date(dateStr);
  date.setMonth(date.getMonth() + period);
  return `${date.getMonth()}.${date.getFullYear().toString().substring(2)}`;
};

export class MyDate {
  static checkZero(number: number) {
    return number < 10 ? "0" + number : number;
  }

  static getTime(dateStr: string) {
    const date = new Date(dateStr);
    return `${date.getHours()}:${date.getMinutes()}`;
  }

  static getMMYYFormat(dateStr: string, period = 1) {
    const date = new Date(dateStr);
    date.setMonth(date.getMonth() + period);
    return `${date.getMonth()}.${date.getFullYear()}`;
  }

  static getDDMonthFromat(dateStr: string) {
    const months = [
      "January",
      "February",
      "Martha",
      "April",
      "may",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const date = new Date(dateStr);
    const day = date.getDate();

    const monthName = months[date.getMonth()];
    return `${day} ${monthName}`;
  }

  static getDDMMYYFormat(dateStr: string) {
    const date = new Date(dateStr);

    const dd = this.checkZero(date.getDate());
    const mm = this.checkZero(date.getMonth() + 1);
    const yy = date.getFullYear().toString().substring(2);

    return `${dd}.${mm}.${yy}`;
  }
}

export const tranformData = (data: OperationsData[]) => {
  return [...data].reverse().reduce((acc, val) => {
    const date = MyDate.getDDMonthFromat(val.date);
    acc[date] ? acc[date].push(val) : (acc[date] = [val]);
    return acc;
  }, {} as { [key: string]: OperationsData[] });
};
