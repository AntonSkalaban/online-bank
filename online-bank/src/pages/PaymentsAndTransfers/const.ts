import { ICardButton } from "type";
import Favorite from "assets/svg/favorite.svg";
import Plus from "assets/svg/plus-in-circle.svg";

export const btns: ICardButton[] = [
  { title: "Order a product", img: Plus, route: "" },
  { title: "Favorite payments", img: Favorite, route: "/favorite" },
];

export const tabs = [
  { name: "payments", title: "Payments" },
  { name: "transfers", title: "Transfers" },
];
