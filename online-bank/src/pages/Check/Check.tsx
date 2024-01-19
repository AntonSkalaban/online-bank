import React from "react";
import { useLocation } from "react-router-dom";
import { Button, Typography } from "components/UI";
import "./style.css";

interface FormValues {
  date: Date;
  fromCard: string;
  transferToType?: string;
  toNumber: string;
  amount: string;
}

export const Check = () => {
  const location = useLocation();

  const state = location.state as FormValues;

  if (!state) return <p>Error...</p>;

  const { date, fromCard, toNumber, transferToType, amount } = state;

  return (
    <div className="page check-page">
      <div className="check-page__container">
        <div className="check">
          <Typography>
            {`${date.getHours()}:${date.getMinutes()} ${
              +date.getMonth() + 1
            }.${date.getFullYear()}`}
            <br />
            From card: {fromCard}
            <br />
            To {transferToType ?? "card"}: {toNumber}
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
        <div className="check__btns-container">
          <Button size="big" color="green" title="Add to favorite" />
        </div>
      </div>
    </div>
  );
};
