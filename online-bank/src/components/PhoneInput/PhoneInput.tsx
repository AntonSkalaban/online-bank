import React from "react";
import { useFormContext } from "react-hook-form";
import { InputController } from "helpers";
import { InputError, Typography } from "components/UI";
import "./style.css";

export const PhoneInput = () => {
  const {
    register,
    formState: { errors },
    watch,
  } = useFormContext();

  const value = InputController.formatPhoneValue(watch("topUpNumber"));

  return (
    <div className="input-block">
      <Typography text="Phone number *" />
      <div className="input-wrapper">
        <input
          className="card__input tel-input"
          value={value}
          placeholder="(XX) XXX-XX-XX"
          type="tel"
          {...register("topUpNumber", {
            required: "Enter phone number",
            pattern: {
              value: /\(\d{2}\) \d{3}-\d{2}-\d{2}/,
              message: "Enter phone number",
            },
          })}
        />
      </div>
      <InputError name="topUpNumber" errors={errors} />
    </div>
  );
};
