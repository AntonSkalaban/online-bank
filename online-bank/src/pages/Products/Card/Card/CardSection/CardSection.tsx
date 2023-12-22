import React from "react";
import { UserCard } from "type";
import { btns } from "./const";
import { CardImage } from "./CardImage/CardImage";
import { Products } from "components";
import { GoBack, Wrapper, CardButtonsList } from "components/UI";
import "./style.css";

interface CardSectionProps {
  card: UserCard;
}
export const CardSection: React.FC<CardSectionProps> = ({ card }) => {
  const { paymentSystem, isVirtual, currency, number, balance } = card;
  return (
    <section className="card-page__section card-section">
      <div className="grey-row">
        <Wrapper>
          <div className="grid grid-top">
            <div className="products-wrapper">
              <Products />
            </div>

            <div className="card-section__container">
              <GoBack />

              <div className="card-section__card-container">
                <CardImage
                  paymentSystem={paymentSystem}
                  isVirtual={isVirtual}
                  number={number}
                />
                <div className="card-section__info">
                  <h2 className="card-section__title">
                    {paymentSystem.toUpperCase()}
                  </h2>
                  <h3 className="card-section__subtitle">
                    {balance} {currency}
                  </h3>
                </div>
                <div className="card-section__btns-container">
                  <CardButtonsList btns={btns} btnSize="small" />
                </div>
              </div>
            </div>
          </div>
        </Wrapper>
      </div>
    </section>
  );
};
