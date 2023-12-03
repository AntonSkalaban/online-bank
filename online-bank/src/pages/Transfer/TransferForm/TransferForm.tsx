import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getTransferFormData } from "store/selectors";
import { withFetchingProducts } from "hok";
import {
  useAction,
  useGetCourse,
  useInitTransferForm,
  useTransferFromCardToCard,
} from "hooks";
import { UserCard } from "type";
import { CardSelect } from "./CardSelect/CardSelect";
import { AmountTransfer } from "./AmountTransfer/AmountTransfer";
import { Button, Typography } from "components/UI";
import "./style.css";

interface TransferFormProps {
  products: UserCard[];
}

export const TransferForm: React.FC<TransferFormProps> = ({ products }) => {
  const { updateTransferErrors } = useAction();
  const navigate = useNavigate();

  const { selectCards, amount, errors, hasCheckbox, isCheckboxSubmit } =
    useSelector(getTransferFormData);

  const course = useGetCourse(
    selectCards.fromCard?.currency,
    selectCards.toCard?.currency
  );

  const { triggerTransfer } = useTransferFromCardToCard();

  useInitTransferForm(products);

  const hanldeConfirm = () => {
    updateTransferErrors();
    if (
      errors.isAmountError ||
      amount === 0 ||
      (hasCheckbox && !isCheckboxSubmit)
    )
      return;

    triggerTransfer(selectCards.fromCard, selectCards.toCard, amount, course);
    alert("Success");
    navigate("/");
  };

  if (!selectCards.fromCard || !selectCards.toCard) return;
  return (
    <form
      className="transfer-form"
      onSubmit={(e: React.FormEvent) => e.preventDefault()}
    >
      <Typography text="* — fields are required" />
      <CardSelect cards={products} />

      <AmountTransfer />

      <Button
        size="big"
        color="green"
        title="Continue"
        clickHandler={hanldeConfirm}
      />
    </form>
  );
};

export const FetchingTransferForm =
  withFetchingProducts<UserCard>("cards")(TransferForm);
