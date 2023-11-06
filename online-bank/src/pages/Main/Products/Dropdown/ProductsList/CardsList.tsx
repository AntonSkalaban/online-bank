import React from "react";
import { ProductNumber, getCardPircture } from "helpers";
import { UserCard } from "type";
import { Typography } from "components/UI";

interface CardsListProps {
  cards: UserCard[];
}

export const CardsList: React.FC<CardsListProps> = ({ cards }) => {
  return (
    <ul className="products__list">
      {cards.map((card) => {
        const {
          _id,
          name,
          paymentSystem,
          isVirtual,
          currency,
          number,
          balance,
        } = card;

        return (
          <li className="product__item" key={_id}>
            <div className="product__img-container card__img-container">
              <div
                className={`card-img ${getCardPircture(
                  isVirtual,
                  paymentSystem
                )}`}
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

                <Typography
                  text={`••
                    ${ProductNumber.hideNumber(number)}`}
                />
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};
