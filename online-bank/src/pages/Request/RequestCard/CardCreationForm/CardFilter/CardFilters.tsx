import React from "react";
import { currency, paymentSystem } from "const";
import { Typography, Checkbox, Select } from "components/UI";

export const CardFilter = () => {
  return (
    <div className="creation-form__container">
      <div className="creation-form__select-container ">
        <div className="creation-form__payment creation-form__select-block currency-select">
          <Typography text="Payment system" />
          <Select
            name="cardFilter.paymentSystem"
            options={paymentSystem as unknown as string[]}
          />
        </div>
        <div className="creation-form__currency creation-form__select-block">
          <Typography text="Currency" />
          <Select
            name="cardFilter.currency"
            options={currency as unknown as string[]}
          />
        </div>
      </div>
      <div className="creation-form__checkboxes-container">
        <Typography text="Purpose of the card" />
        <Checkbox name="cardFilter.isVirtual">Virtual card</Checkbox>
      </div>
    </div>
  );
};
