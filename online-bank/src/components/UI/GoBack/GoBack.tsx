import React from "react";

import { Typography } from "../Typography/Typography";
import Sprites from "assets/svg/sprites.svg";
import "./style.css";

export const GoBack = () => {
  return (
    <div className="go-back-title" onClick={() => history.back()}>
      <Typography>
        <svg className="go-back-title__svg">
          <use href={`${Sprites}#arrow-back`} />
        </svg>
        Go back
      </Typography>
    </div>
  );
};
