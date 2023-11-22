import React from "react";
import { useSelector } from "react-redux";
import { getCardParams } from "store/selectors";
import { productAPI } from "services/api";
import { getAvaliableCards, getCardPircture } from "helpers";
import { DefaultCard } from "type";
import { Button } from "components/UI";
import "./style.css";

interface CardsListProps {
  isConfirm: boolean;
}
export const CardsList: React.FC<CardsListProps> = ({ isConfirm }) => {
  const cardParams = useSelector(getCardParams);
  const avaliableCards = getAvaliableCards(cardParams);

  const [requestCard] = productAPI.useAddProductsMutation();

  const handleClick = (card: DefaultCard) => {
    requestCard({ productType: "cards", body: card });
  };

  return (
    <div className="cards-list">
      <h3 className="cards-list__title">
        {avaliableCards.length} {avaliableCards.length > 1 ? "cards" : "card"}{" "}
        suit you
      </h3>
      {avaliableCards.map((card) => {
        const { name, paymentSystem, isVirtual, currency, period } = card;
        return (
          <div className="card-list__item" key={name}>
            <div className="avaliable-card">
              <div className="avalivle-card__img-container">
                <div
                  className={`card-img ${getCardPircture(
                    isVirtual,
                    paymentSystem
                  )}`}
                ></div>
              </div>

              <div className="avaliable-card__info-container">
                <p className="avaliable-card__title">
                  {name} ,{currency}
                </p>
                <p className="avaliable-card__subtitle">
                  Currency: {currency}, Period: {period} month
                </p>
              </div>
            </div>
            <Button
              size={"medium"}
              color={isConfirm ? "green" : "default"}
              disabled={!isConfirm}
              title={"Request"}
              clickHandler={() => {
                handleClick(card);
              }}
            />
          </div>
        );
      })}
    </div>
  );
};
