import React from "react";
import { credits } from "const";
import { Button } from "components/UI";
import "./style.css";

export const CreditsList = () => {
  return (
    <div className="credits-list">
      {credits.map((credit) => {
        return (
          <div className="credit-card" key={credit.name}>
            <div className="credit-card__img-container">
              <img
                className="credit-card__img"
                alt="credit-img"
                src={credit.img}
              />
            </div>
            <div className="credit-card__description">
              <p className="credit-card__title">{credit.name}</p>
              <ul className="credit-card__conditions-list">
                <li className="credit-card__condition-item">
                  <span className="credit-card__condition-title">
                    {" "}
                    {credit.rate} %
                  </span>
                  <br />

                  <span className="credit-card__condition-subtitle">
                    interest rate
                  </span>
                </li>
                <li className="credit-card__condition-item">
                  <span className="credit-card__condition-title">
                    {" "}
                    up to {credit.maxSum} $
                  </span>
                  <br />
                  <span className="credit-card__condition-subtitle">
                    amount of credit
                  </span>
                </li>
                <li className="credit-card__condition-item">
                  <span className="credit-card__condition-title">
                    {" "}
                    {credit.period} months
                  </span>
                  <br />
                  <span className="credit-card__condition-subtitle">
                    credit term
                  </span>
                </li>
              </ul>
            </div>
            <div className="credit-card__btn-container">
              <Button size="medium" title="Seelect" />
            </div>
          </div>
        );
      })}
    </div>
  );
};
