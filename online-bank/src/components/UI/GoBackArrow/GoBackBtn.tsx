import React from "react";
import Sprites from "assets/svg/sprites.svg";
import "./style.css";

export const GoBackBtn = () => {
  return (
    <button className="go-back-btn" onClick={() => history.back()}>
      <svg className="go-back-arrow">
        <use href={`${Sprites}#arrow-back`} />
      </svg>
    </button>
  );
};
