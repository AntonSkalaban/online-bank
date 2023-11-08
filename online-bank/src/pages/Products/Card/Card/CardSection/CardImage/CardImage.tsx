import React from "react";
import { ProductNumber, getCardPircture } from "helpers";
import { PaymentSystem } from "type";
import { Typography } from "components/UI";
import VisaLogo from "assets/svg/visa-logo.svg";
import MastercardLogo from "assets/svg/mastercard-logo.svg";
import "./style.css";

interface CardImageProps {
  paymentSystem: PaymentSystem;
  isVirtual: boolean;
  number: string;
}
export const CardImage: React.FC<CardImageProps> = ({
  paymentSystem,
  isVirtual,
  number,
}) => {
  return (
    <div
      className={`card-page__card-img card-img_big ${getCardPircture(
        isVirtual,
        paymentSystem
      )}`}
    >
      <div className="big-card_number">
        <Typography
          color="white"
          text={`***${ProductNumber.showLatestNumbers(number)}`}
        />
      </div>
      <div className="big-card_logo-container">
        <img
          className="big-card__logo"
          src={paymentSystem === "Visa" ? VisaLogo : MastercardLogo}
        />
      </div>
    </div>
  );
};
