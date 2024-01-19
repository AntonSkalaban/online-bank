import React from "react";
import { useFormContext } from "react-hook-form";
import { InputController } from "helpers";
import { InputError, Typography } from "components/UI";
import "./style.css";

export const AmountInput = () => {
  const {
    register,
    formState: { errors },
    watch,
  } = useFormContext();

  const [amount, fromCard] = watch(["amount", "fromCard"]);

  return (
    <div className="input-block">
      <Typography text="Amount of payment *" />
      <div className="input-wrapper">
        <input
          className={"amount__input tel-input"}
          value={InputController.getNumberValue(amount)}
          type="tel"
          {...register("amount", {
            required: "Enter the transfer amount",
            validate: {
              enoughFunds: (value) =>
                +value <= fromCard.balance || "Insufficient funds",
              moreThenTwo: (value) => +value >= 2 || "More than 2",
            },
          })}
        />
        <div className="border_grey amount__currency">{fromCard.currency}</div>
      </div>
      <InputError name={"amount"} errors={errors} />
    </div>
  );
};
