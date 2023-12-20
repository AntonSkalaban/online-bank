import React from "react";
import { UserCredit } from "type";
import { Typography } from "components/UI";
import Debt from "assets/svg/debt.svg";

interface CreditProps {
  credit: UserCredit;
}

export const Credit: React.FC<CreditProps> = ({ credit }) => {
  const { name, rate, currency, balance } = credit;

  return (
    <div className="product__item">
      <div className="product__img-container">
        <img className="product__img" src={Debt} />
      </div>
      <div className="product__info">
        <div className="product__top-row product-row">
          <p className="product__balance">
            {balance} {currency}
          </p>
          <p>{rate}%</p>
        </div>
        <div className="product__bottom-row product-row">
          <Typography text={name} />
        </div>
      </div>
    </div>
  );
};
