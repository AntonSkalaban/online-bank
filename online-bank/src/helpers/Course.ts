import { Currency, ExchangeInfo } from "type";

export class Course {
  static get(
    data: ExchangeInfo,
    curr1: Currency | "PLN",
    curr2: Currency | "PLN",
    isCurrent: boolean
  ) {
    if (isCurrent) {
      return data.Valute[curr1].Value / data.Valute[curr2].Value;
    }
    return data.Valute[curr1].Previous / data.Valute[curr2].Previous;
  }

  static getBankCourse(course: number, type: "sale" | "purcashe") {
    if (type === "sale") return course * 0.99;
    return course * 1.02;
  }
}
