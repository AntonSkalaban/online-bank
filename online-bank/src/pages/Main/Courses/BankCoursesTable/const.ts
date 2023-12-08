import USA_FLAG from "assets/svg/usa-svgrepo-com.svg";
import EUR_FLAG from "assets/svg/europe-svgrepo-com.svg";
import { Currency } from "type";

interface CurrencyInfo {
  name: string;
  curr: Currency;
  img: string;
}
export const currencies: CurrencyInfo[] = [
  { name: "Euro", curr: "EUR", img: EUR_FLAG },
  { name: "Great Britain Pound", curr: "GBP", img: USA_FLAG },
];
