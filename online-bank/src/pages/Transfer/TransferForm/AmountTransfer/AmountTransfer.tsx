import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { getTransferFormData } from "store/selectors";
import { useAction } from "hooks";
import { InputController } from "helpers";
import { ExchangeBlock } from "./ExchangeBlock/ExchangeBlock";
import { Typography } from "components/UI";
import "./style.css";

export const AmountTransfer = () => {
  const {
    updateForm,
    updateTransferErrors,
    removeTransferErrors,
    initCheckbox,
  } = useAction();

  const {
    amount,
    hasCheckbox,
    selectCards: { fromCard },
    errors: { isRequireError, isAmountError },
  } = useSelector(getTransferFormData);

  useEffect(() => {
    initCheckbox();
  });

  const handleAmmountChange = (e: React.FormEvent<HTMLInputElement>) => {
    removeTransferErrors();
    updateForm({
      amount: InputController.getNumberValue(e.currentTarget?.value),
    });
    updateTransferErrors();
  };

  return (
    <div className="amount-block">
      <Typography text="Amount of payment *" />
      <div className="amount__input-wrapper">
        <input
          className={`amount__input border_${
            isAmountError || isRequireError ? "red" : "grey"
          }`}
          type="tel"
          onChange={handleAmmountChange}
          value={amount}
        />
        <div className="border_grey amount__currency">{fromCard.currency}</div>
      </div>

      {isAmountError && <Typography color="red" text="Insufficient funds" />}
      {isRequireError && (
        <Typography color="red" text="Enter the transfer amount" />
      )}

      {hasCheckbox && <ExchangeBlock />}
    </div>
  );
};
