import React from "react";
import { useFormContext } from "react-hook-form";
import { InputController } from "helpers";
import { InputError, Typography } from "components/UI";
import "./style.css";

export const CardInput = () => {
  const {
    register,
    formState: { errors },
    watch,
  } = useFormContext();

  const cardNumber = InputController.formatCardValue(watch("cardNumber"));

  return (
    <div className="input-block">
      <Typography text="Card number *" />
      <div className="input-wrapper">
        <input
          className="card__input tel-input"
          value={cardNumber}
          placeholder="XXXX XXXX XXXX XXXX"
          type="tel"
          {...register("cardNumber", {
            required: "Enter card number",
            pattern: {
              value: /^\d{4} \d{4} \d{4} \d{4}$/,
              message: "Enter card number",
            },
          })}
        />
      </div>
      <InputError name="cardNumber" errors={errors} />
    </div>
  );
};
