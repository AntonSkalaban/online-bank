import React from "react";
import { Typography } from "components/UI";
import { OperationsData } from "type";
import "./style.css";

interface PaperCheckPops {
  data: Omit<OperationsData, "_id">;
}

export const PaperCheck: React.FC<PaperCheckPops> = ({ data }) => {
  const { date, fromCard, topUpNumber, topUpBy, amount } = data;

  return (
    <div className="check">
      <Typography>
        {`${date.getHours()}:${date.getMinutes()} ${
          +date.getMonth() + 1
        }.${date.getFullYear()}`}
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
