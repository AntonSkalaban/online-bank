import { ICardButton } from "type";
import Plus from "assets/svg/plus-in-circle.svg";
import Arrow from "assets/svg/arrow.svg";
import Card from "assets/svg/card.svg";

export const btns: ICardButton[] = [
  {
    title: "Top up",
    img: Plus,
    route: "transfer/between-my-cards",
  },
  { title: "Transfer", img: Arrow, route: "/payments-and-transfers/transfers" },
  { title: "Payments", img: Card, route: "/payments-and-transfers/payments" },
];
