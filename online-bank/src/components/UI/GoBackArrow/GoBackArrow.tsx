import React from "react";
import GoBackArrowSvg from "assets/svg/arrow-back.svg";
import "./style.css";

export const GoBackArrow = () => {
  return (
    <button className="go-back-arrow" onClick={() => history.back()}>
      <img src={GoBackArrowSvg} />
    </button>
  );
};
