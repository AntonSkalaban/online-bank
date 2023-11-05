import React from "react";
import { useSelector } from "react-redux";
import { getCardParams } from "store/selectors";
import { useAction } from "hooks";
import { currency, paymentSystem } from "./const";
import { Checkbox, DropdownSelect } from "components";
import { Typography } from "components/UI";
import "./style.css";

export const CardCreationForm = () => {
  const defaultFilterParams = useSelector(getCardParams);

  const { updateCardFilter } = useAction();

  const hanldeChange = (val: Record<string, string | number | boolean>) => {
    updateCardFilter(val);
  };

  return (
    <div className="creation-form">
      <div className="creation-form__select-container">
        <div className="creation-form__payment creation-form__select-block currency-select">
          <Typography text="Payment system" />
          <DropdownSelect
            name={"paymentSystem"}
            options={paymentSystem}
            checkedValue={defaultFilterParams.paymentSystem}
            selectHandler={hanldeChange}
          />
        </div>
        <div className="creation-form__currency creation-form__select-block">
          <Typography text="Currency" />
          <DropdownSelect
            name={"currency"}
            options={currency}
            checkedValue={defaultFilterParams.currency}
            selectHandler={hanldeChange}
          />
        </div>
      </div>
      <div className="creation-form__checkboxes-container">
        <Typography text="Purpose of the card" />
        <Checkbox
          name={"isVirtual"}
          label={"Virtual card"}
          isChecked={defaultFilterParams.isVirtual}
          selectHandler={hanldeChange}
        />
      </div>
    </div>
  );
};
