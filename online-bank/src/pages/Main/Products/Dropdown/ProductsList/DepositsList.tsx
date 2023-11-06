import React from "react";
import { UserDeposit } from "type";
import { Typography } from "components/UI";
import Safe from "assets/svg/safe.svg";

interface DepositsListProps {
  deposits: UserDeposit[];
}

export const DepositsList: React.FC<DepositsListProps> = ({ deposits }) => {
  return (
    <ul className="products__list">
      {deposits.map((deposit) => {
        const { _id, name, rate, currency, balance } = deposit;

        return (
          <li className="product__item" key={_id}>
            <div className="product__img-container">
              <img className="product__img" src={Safe} />
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
