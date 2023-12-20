import React from "react";
import { ProductNumber } from "helpers/ProductNumber";
import { UserCard } from "type";
import { Typography } from "components/UI";
import "./style.css";

interface SelectCardItemProps {
  card: UserCard;
}
export const SelectCardItem: React.FC<SelectCardItemProps> = ({ card }) => {
  const { name, balance, number, currency } = card;

  return (
    <div className="select-card-item">
      <div className="product__info">
        <div className="product-row">
          <Typography
            color="black"
            size="big"
            weight="normal-plus"
            text={name}
          />
          <Typography color="black" size="big" weight="strong" text={balance} />
        </div>
        <div className="product-row">
          <Typography
            text={`
          ••••${ProductNumber.showLatestNumbers(number)}|${currency}`}
          />
        </div>
      </div>
    </div>
  );
};
