import React from "react";
import { UserCredit } from "type";
import { Typography } from "components/UI";
import Debt from "assets/svg/debt.svg";

interface CreditsListProps {
  credits: UserCredit[];
}

export const CreditsList: React.FC<CreditsListProps> = ({ credits }) => {
  return (
    <ul className="products__list">
      {credits.map((credit) => {
        const { _id, name, rate, currency, balance } = credit;

        return (
          <li className="product__item" key={_id}>
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
          </li>
        );
      })}
    </ul>
  );
};
