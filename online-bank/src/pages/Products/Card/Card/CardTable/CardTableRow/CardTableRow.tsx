import React from "react";
import { Typography } from "components/UI";
import "./style.css";

interface CardTableRowProps {
  label: string;
  value: string;
  imgSrc?: string;
  callbak?: () => void;
}

export const CardTableRow: React.FC<CardTableRowProps> = ({
  label,
  value,
  imgSrc,
  callbak,
}) => {
  return (
    <div className="card-page__table-row">
      <Typography size="big" color="black" weight="strong" text={label} />
      <Typography color="black" weight="strong">
        {value}
        {imgSrc && (
          <img className="table-row__img" src={imgSrc} onClick={callbak} />
        )}
      </Typography>
    </div>
  );
};
