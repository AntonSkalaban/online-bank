import React from "react";
import "./style.css";
import { ICardButton } from "components";

interface CardButtonProps {
  data: ICardButton;
}

export const CardButton: React.FC<CardButtonProps> = ({
  data: { title, img },
}) => {
  return (
    <button className="card-btn">
      <div className="card-btn__img-container">
        <img className="card-btn__img" src={img} />
      </div>
      <div className="card-btn__title"> {title}</div>
    </button>
  );
};
