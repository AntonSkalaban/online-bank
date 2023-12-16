import USA_FLAG from "assets/svg/usa-svgrepo-com.svg";
import EUR_FLAG from "assets/svg/europe-svgrepo-com.svg";
import POL_FLAG from "assets/svg/poland-svgrepo-com.svg";
import { Currency } from "type";

interface NationalCurrencyInfo {
  name: string;
  curr: Currency | "PLN";
  img: string;
}

export const currencies: NationalCurrencyInfo[] = [
  { name: "Euro", curr: "EUR", img: EUR_FLAG },
  { name: "Great Britain Pound", curr: "GBP", img: USA_FLAG },
  { name: "Polish zloty", curr: "PLN", img: POL_FLAG },
];
