import { ICardButton } from "type";
import Favorite from "assets/svg/favorite.svg";
import Plus from "assets/svg/plus-in-circle.svg";
import Arrow from "assets/svg/arrow.svg";

export const btns: ICardButton[] = [
  { title: "Order a product", img: Plus },
  { title: "Selected payments", img: Favorite },
  { title: "Payments", img: Arrow },
];
