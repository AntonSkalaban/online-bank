import React from "react";
import { Typography } from "components/UI";
import { OperationsData } from "type";
import "./style.css";
import { MyDate } from "helpers/validityToMMYY";

interface PaperCheckPops {
  data: Partial<OperationsData>;
}

export const PaperCheck: React.FC<PaperCheckPops> = ({ data }) => {
  const { date, fromCard, topUpNumber, topUpBy, amount } = data;
  if (!date || !fromCard) return;

  return (
    <div className="check">
      <Typography>
        {MyDate.getTime(date)} {MyDate.getDDMMYYFormat(date)}
        <br />
        From card: {fromCard.number}
        <br />
        To {topUpBy ?? "card"}: {topUpNumber}
        <br />
        Amount: {amount}
      </Typography>

      <div className="check__bottom">
        <Typography>***Thank you for using our bank***</Typography>
        <div className="check__stamp">
          <h2 className="check__paid">Paid</h2>
          <h2>Online-bank</h2>
        </div>
      </div>
    </div>
  );
};
