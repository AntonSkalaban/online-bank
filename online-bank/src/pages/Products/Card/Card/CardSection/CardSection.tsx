import { Typography, Wrapper } from "components/UI";
import React from "react";
import { UserCard } from "type";
import { btns } from "./const";
import { CardImage } from "./CardImage/CardImage";
import { CardButtonsList } from "components";
import "./style.css";

interface CardSectionProps {
  card: UserCard;
}
export const CardSection: React.FC<CardSectionProps> = ({ card }) => {
  const { paymentSystem, isVirtual, currency, number, balance } = card;
  return (
    <section className="card-page__section card-section">
      <Wrapper>
        <div className="go-back-btn" onClick={() => history.back()}>
          {" "}
          <Typography text={"< Go Back"} weight="strong" />
        </div>

        <div className="card-page__card-container">
          <CardImage
            paymentSystem={paymentSystem}
            isVirtual={isVirtual}
            number={number}
          />
          <div className="card-page__card-info">
            <h2 className="card-page__card-title">
              {paymentSystem.toUpperCase()}
            </h2>
            <h3 className="card-page__card-subtitle">
              {balance} {currency}
            </h3>
          </div>
          <div className="card-page__btns-container">
            <CardButtonsList btns={btns} btnSize="small" />
          </div>
        </div>
      </Wrapper>
    </section>
  );
};
