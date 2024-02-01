import React from "react";
import { ProductNumber, getCardPircture } from "helpers";
import { UserCard } from "type";
import { Typography } from "components/UI";

interface CardProps {
  card: UserCard;
}

export const Card: React.FC<CardProps> = ({ card }) => {
  const { name, paymentSystem, isVirtual, currency, number, balance } = card;

  return (
    <div className="product__item">
      <div className="product__img-container card__img-container">
        <div
          className={`card-img ${getCardPircture(isVirtual, paymentSystem)}`}
        ></div>
      </div>
      <div className="product__info">
        <div className="product__top-row product-row">
          <p className="product__balance">
            {balance} {currency}
          </p>
        </div>
        <div className="product__bottom-row product-row">
          <Typography text={name} />

          <Typography text={`••${ProductNumber.showLatestNumbers(number)}`} />
        </div>
      </div>
    </div>
  );
};
