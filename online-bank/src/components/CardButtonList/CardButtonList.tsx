import React from "react";
import "./style.css";
import { CardButton } from "components";
import Favorite from "assets/svg/favorite.svg";
import Plus from "assets/svg/plus-in-circle.svg";
import Arrow from "assets/svg/arrow.svg";

export interface ICardButton {
  title: string;
  img: string;
}

const btns: ICardButton[] = [
  { title: "Order a product", img: Plus },
  { title: "Selected payments", img: Favorite },
  { title: "Payments", img: Arrow },
];

export const CardButtonList = () => {
  return (
    <div className="card-btn-list">
      {btns.map((i) => {
        return <CardButton key={i.title} data={i} />;
      })}
    </div>
  );
};
