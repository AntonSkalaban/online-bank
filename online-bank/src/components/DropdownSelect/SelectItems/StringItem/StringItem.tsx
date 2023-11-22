import React from "react";
import { Typography } from "components/UI";

export const SelectStringItem: React.FC<{ label: string | number }> = ({
  label,
}) => {
  return (
    <Typography size="big" weight="normal-plus" color="black">
      {" "}
      {label}{" "}
    </Typography>
  );
};
