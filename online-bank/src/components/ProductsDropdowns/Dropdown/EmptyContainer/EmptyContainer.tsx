import React from "react";
import { Typography } from "components/UI";
import "./style.css";

export const EmptyContainer = () => {
  return (
    <div className="dropdown__empty-contaner">
      <Typography text="You don't have a registered product yet" />

      <Typography color="green">
        <a className="dropdown__empty-link">More details</a>
      </Typography>
    </div>
  );
};
