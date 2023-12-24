import React from "react";
import Sprites from "assets/svg/sprites.svg";
import "./style.css";

export const GoBackBtn = () => {
  return (
    <div className="go-back-btn" onClick={() => history.back()}>
      <div className="go-back__arrow-wrapper">
        <svg className="go-back-arrow">
          <use href={`${Sprites}#arrow-back`} />
        </svg>
      </div>
    </div>
  );
};
