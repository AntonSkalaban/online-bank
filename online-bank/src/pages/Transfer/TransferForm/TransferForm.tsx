import React from "react";
import { useSelector } from "react-redux";
import { getTransferFormData } from "store/selectors";
import { withFetchingProducts } from "hok";
import {
  useAction,
  useGetTransferCards,
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
  const { triggerTransfer } = useTransferFromCardToCard();

  useGetTransferCards(products);

  const { selectCards, amount, errors } = useSelector(getTransferFormData);

  const hanldeConfirm = () => {
    if (errors.isAmountError || errors.isRequireError) return;
    triggerTransfer(selectCards.fromCard, selectCards.toCard, amount);
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
