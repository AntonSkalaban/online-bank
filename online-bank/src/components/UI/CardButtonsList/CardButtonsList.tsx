import React from "react";
import { ICardButton } from "type";
import { CardButton } from "../CardButton/CardButton";
import "./style.css";

interface CardButtonsListProps {
  btns: ICardButton[];
  btnSize?: "medium" | "big" | "small";
}

export const CardButtonsList: React.FC<CardButtonsListProps> = ({
  btns,
  btnSize = "medium",
}) => {
  return (
    <div className="card-btn-list">
      {btns.map((i) => {
        return <CardButton key={i.title} data={i} btnSize={btnSize} />;
      })}
    </div>
  );
};
