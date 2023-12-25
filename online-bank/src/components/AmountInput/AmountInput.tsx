import React from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { useSelector } from "react-redux";
import { getTransferFormData } from "store/selectors";
import { Currency, FormValues } from "type";
import { Typography } from "components/UI";
import "./style.css";

interface AmountInputProps {
  currency: Currency;
  register: UseFormRegister<FormValues>;
  errors: FieldErrors<FormValues>;
}

export const AmountInput: React.FC<AmountInputProps> = ({
  currency,
  errors,
  register,
}) => {
  const {
    selectCards: { fromCard },
  } = useSelector(getTransferFormData);

  return (
    <div className="amount-block">
      <Typography text="Amount of payment *" />
      <div className="amount__input-wrapper">
        <input
          className={"amount__input"}
          type="tel"
          {...register("amount", {
            required: "Enter the transfer amount",
            validate: {
              enoughFunds: (value) =>
                +value < fromCard.balance || "Insufficient funds",
              moreThenTwo: (value) => +value >= 2 || "More than 2",
            },
          })}
        />
        <div className="border_grey amount__currency">{currency}</div>
      </div>
      <ErrorMessage
        errors={errors}
        name="amount"
        render={({ messages }) => {
          return messages
            ? Object.entries(messages).map(([type, message]) => (
                <Typography color="red" key={type}>
                  {message}
                </Typography>
              ))
            : null;
        }}
      />
    </div>
  );
};
