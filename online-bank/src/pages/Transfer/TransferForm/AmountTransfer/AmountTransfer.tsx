import React from "react";
import { useSelector } from "react-redux";
import { getTransferFormData } from "store/selectors";
import { useAction } from "hooks";
import { InputController } from "helpers";
import { Typography } from "components/UI";
import "./style.css";

export const AmountTransfer = () => {
  const { updateTransferAmount, updateTransferErrors, removeTransferErrors } =
    useAction();

  const {
    selectCards: { fromCard },
    amount,
    errors: { isRequireError, isAmountError },
  } = useSelector(getTransferFormData);

  const handleAmmountChange = (e: React.FormEvent<HTMLInputElement>) => {
    removeTransferErrors();
    updateTransferAmount(
      InputController.getNumberValue(e.currentTarget?.value)
    );
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

      {isAmountError && <Typography color="red" text="Insufficient funds " />}
      {isRequireError && (
        <Typography color="red" text="Enter the transfer amount" />
      )}
    </div>
  );
};
