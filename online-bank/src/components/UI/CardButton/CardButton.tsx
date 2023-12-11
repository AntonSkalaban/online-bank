import React from "react";
import { useNavigate } from "react-router-dom";
import { ICardButton } from "type";
import "./style.css";

interface CardButtonProps {
  data: ICardButton;
  btnSize?: "medium" | "big" | "small";
}

export const CardButton: React.FC<CardButtonProps> = ({
  data: { title, img, route },
  btnSize = "medium",
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(route);
  };

  return (
    <button className={`card-btn card-btn_${btnSize}`} onClick={handleClick}>
      <div className={`card-btn__img-container_${btnSize}`}>
        <img className="card-btn__img" src={img} />
      </div>
      <div className={`card-btn__title card-btn__title_${btnSize}`}>
        {title}
      </div>
    </button>
  );
};
