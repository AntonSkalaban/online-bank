import { ICardButton } from "type";
import Plus from "assets/svg/plus-in-circle.svg";
import Arrow from "assets/svg/arrow.svg";

export const btns: ICardButton[] = [
  { title: "Top up", img: Plus, route: "transfer/top-up" },
  { title: "Payments", img: Arrow, route: "" },
];
