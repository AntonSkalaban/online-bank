import React from "react";
import { InputController } from "helpers";
import { Typography } from "components/UI";
import { Currency } from "type";
import "./style.css";

interface AmountInputProps {
  amount: number;
  currency: Currency;
  errors: { isRequireError: boolean; isAmountError: boolean };
  removeErrors: () => void;
  updateErrors: () => void;
  handleAmountChange: (value: Record<string, number>) => void;
}

export const AmountInput: React.FC<AmountInputProps> = ({
  amount,
  currency,
  errors,
  handleAmountChange,
  removeErrors,
  updateErrors,
}) => {
  const { isRequireError, isAmountError } = errors;

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    removeErrors();
    handleAmountChange({
      amount: InputController.getNumberValue(e.currentTarget?.value),
    });
    updateErrors();
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
          onChange={handleChange}
          value={amount}
        />
        <div className="border_grey amount__currency">{currency}</div>
      </div>

      {isAmountError && <Typography color="red" text="Insufficient funds" />}
      {isRequireError && (
        <Typography color="red" text="Enter the transfer amount" />
      )}
    </div>
  );
};
