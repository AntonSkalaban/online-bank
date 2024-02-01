import React from "react";
import { Typography } from "components/UI";
import "./style.css";

export const EmptyContainer = () => {
  return (
    <div className="dropdown__empty-contaner">
      <Typography>
        You don&apos;t have a registered product yet{" "}
        <a className="dropdown__empty-link">More details</a>
      </Typography>
    </div>
  );
};
