import React, { useState } from "react";
import { ProductNumber, validityToMMYY } from "helpers";
import { UserCard } from "type";
import { CardTableRow } from "./CardTableRow/CardTableRow";
import Show from "assets/svg/show.svg";
import Hide from "assets/svg/hide.svg";

interface CardTableProps {
  card: UserCard;
}

export const CardTable: React.FC<CardTableProps> = ({ card }) => {
  const [isNumberHide, setIsNumberHide] = useState(true);
  const [isCvvHide, setIsCvvHide] = useState(true);

  const togleCardNumber = () => {
    setIsNumberHide((prev) => !prev);
  };

  const togleCvv = () => {
    setIsCvvHide((prev) => !prev);
  };

  const { number, date, period, cvv } = card;

  return (
    <div className="card-page__card-table">
      <CardTableRow
        label={"Card number"}
        value={isNumberHide ? ProductNumber.showExtremeNumbers(number) : number}
        imgSrc={isNumberHide ? Show : Hide}
        callbak={togleCardNumber}
      />
      <CardTableRow label={"Validity"} value={validityToMMYY(date, period)} />
      <CardTableRow
        label={"CVV-code"}
        value={isCvvHide ? ProductNumber.hideAllNumber(cvv) : cvv}
        imgSrc={isCvvHide ? Show : Hide}
        callbak={togleCvv}
      />
    </div>
  );
};
