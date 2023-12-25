import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { getCardParams } from "store/selectors";
import { useAction } from "hooks";
import { FormValues } from "type";
import { currency, paymentSystem } from "const";
import { Typography, Checkbox, Select } from "components/UI";
import "./style.css";

export const CardCreationForm = () => {
  const defaultFilterParams = useSelector(getCardParams);

  const { updateCardFilter, submitRequestForm } = useAction();

  const {
    register,
    watch,
    trigger,
    formState: { errors },
  } = useForm({
    defaultValues: {
      isSubmit: false,
      isVirtual: false,
    } as FormValues,
    criteriaMode: "all",
    mode: "onChange",
  });

  useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (!name) return;
      if (name === "isVirtual") {
        updateCardFilter({ [name]: value[name] } as FormValues);
      }
      if (name === "isSubmit") {
        submitRequestForm(value[name] as boolean);
      }
    });

    return () => subscription.unsubscribe();
  }, [submitRequestForm, updateCardFilter, watch]);

  useEffect(() => {
    trigger("isSubmit");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <form className="creation-form">
      <div className="creation-form__container">
        <div className="creation-form__select-container">
          <div className="creation-form__payment creation-form__select-block currency-select">
            <Typography text="Payment system" />
            <Select
              name={"paymentSystem"}
              options={paymentSystem as unknown as string[]}
              checkedValue={defaultFilterParams.paymentSystem}
              selectHandler={updateCardFilter}
            />
          </div>
          <div className="creation-form__currency creation-form__select-block">
            <Typography text="Currency" />
            <Select
              name={"currency"}
              options={currency as unknown as string[]}
              checkedValue={defaultFilterParams.currency}
              selectHandler={updateCardFilter}
            />
          </div>
        </div>
        <div className="creation-form__checkboxes-container">
          <Typography text="Purpose of the card" />

          <Checkbox
            name="isVirtual"
            register={register}
            label={"Virtual card"}
            errors={errors}
          />
        </div>
      </div>
      <Checkbox
        name="isSubmit"
        register={register}
        errors={errors}
        isRequired={true}
      >
        <Typography>I hereby agree to the </Typography>
        <Typography color="green">Rewards and terms of service</Typography>
      </Checkbox>
    </form>
  );
};
