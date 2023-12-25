import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { getTransferFormData } from "store/selectors";
import { withFetchingProducts } from "hoc";
import { InputController } from "helpers";
import {
  useAction,
  useInitTransferForm,
  useTransferFromCardToCard,
} from "hooks";
import { UserCard, FormValues } from "type";
import { CardsSelect } from "./CardsSelect/CardsSelect";
import { ExchangeBlock } from "./ExchangeBlock/ExchangeBlock";
import { AmountInput } from "components";
import { Button, Typography } from "components/UI";
import "./style.css";

interface TransferFormProps {
  products: UserCard[];
}

export const TransferForm: React.FC<TransferFormProps> = ({ products }) => {
  const navigate = useNavigate();
  const { updateForm } = useAction();

  const {
    selectCards: { fromCard, toCard },
    hasCheckbox,
    amount,
  } = useSelector(getTransferFormData);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    defaultValues: {
      amount: 0,
    } as FormValues,
    criteriaMode: "all",
  });

  const { triggerTransfer } = useTransferFromCardToCard(
    fromCard,
    toCard,
    amount
  );

  useInitTransferForm(products);

  useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (!name) return;
      if (name === "amount") {
        updateForm({
          amount: InputController.getNumberValue(
            value[name] as string
          ).toString(),
        });
      }
    });

    return () => subscription.unsubscribe();
  }, [updateForm, watch]);

  const onSubmit = () => {
    triggerTransfer();
    navigate("/");
  };

  if (!fromCard || !toCard) return <p>No cards to transfer</p>;

  return (
    <form className="transfer-form" onSubmit={handleSubmit(onSubmit)}>
      <Typography text="* — fields are required" />

      <CardsSelect cards={products} />

      <AmountInput
        register={register}
        errors={errors}
        currency={fromCard.currency}
      />

      {hasCheckbox && <ExchangeBlock register={register} errors={errors} />}

      <Button size="big" color="green" title="Submit" />
    </form>
  );
};

export const FetchingTransferForm =
  withFetchingProducts<UserCard>("cards")(TransferForm);
