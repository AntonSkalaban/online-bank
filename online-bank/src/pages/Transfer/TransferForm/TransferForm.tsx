import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getTransferFormData } from "store/selectors";
import { withFetchingProducts } from "hoc";
import {
  useAction,
  useInitTransferForm,
  useTransferFromCardToCard,
} from "hooks";
import { UserCard } from "type";
import { CardsSelect } from "./CardsSelect/CardsSelect";
import { ExchangeBlock } from "./AmountTransfer/ExchangeBlock/ExchangeBlock";
import { AmountInput } from "components";
import { Button, Typography } from "components/UI";
import "./style.css";

interface TransferFormProps {
  products: UserCard[];
}

export const TransferForm: React.FC<TransferFormProps> = ({ products }) => {
  const {
    selectCards: { fromCard, toCard },
    amount,
    errors,
    hasCheckbox,
    isCheckboxSubmit,
  } = useSelector(getTransferFormData);

  const navigate = useNavigate();

  useInitTransferForm(products);

  const { updateForm, updateTransferErrors, removeTransferErrors } =
    useAction();

  const { triggerTransfer } = useTransferFromCardToCard(
    fromCard,
    toCard,
    amount
  );

  const hanldeConfirm = () => {
    updateTransferErrors();
    if (
      errors.isAmountError ||
      amount === 0 ||
      (hasCheckbox && !isCheckboxSubmit)
    )
      return;

    triggerTransfer();
    alert("Success");
    navigate("/");
  };

  if (!fromCard || !toCard) return <p>No cards to transfer</p>;

  return (
    <form
      className="transfer-form"
      onSubmit={(e: React.FormEvent) => e.preventDefault()}
    >
      <Typography text="* — fields are required" />

      <CardsSelect cards={products} />

      <AmountInput
        amount={amount}
        currency={fromCard.currency}
        errors={errors}
        removeErrors={removeTransferErrors}
        updateErrors={updateTransferErrors}
        handleAmountChange={updateForm}
      />

      {hasCheckbox && <ExchangeBlock />}

      <Button
        size="big"
        color="green"
        title="Submit"
        clickHandler={hanldeConfirm}
      />
    </form>
  );
};

export const FetchingTransferForm =
  withFetchingProducts<UserCard>("cards")(TransferForm);
