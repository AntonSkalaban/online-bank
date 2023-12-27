import React from "react";
import { useNavigate } from "react-router-dom";
import { FormProvider, useForm } from "react-hook-form";
import { withFetchingTranferData } from "hoc";
import { useTransferFromCardToCard } from "hooks";
import { UserCard } from "type";
import { CardsSelect } from "./CardsSelect/CardsSelect";
import { ExchangeBlock } from "./ExchangeBlock/ExchangeBlock";
import { AmountInput } from "components";
import { Button, Typography } from "components/UI";
import "./style.css";

interface TransferFormProps {
  cards: UserCard[];
  card: UserCard;
}

export const TransferForm: React.FC<TransferFormProps> = ({ cards, card }) => {
  const navigate = useNavigate();

  const methods = useForm({
    defaultValues: {
      selectCards: {
        fromCard: cards[0]._id !== card._id ? cards[0] : cards[1],
        toCard: card,
      },
      amount: "0",
    },
    criteriaMode: "all",
  });

  const [fromCard, toCard, amount] = methods.watch([
    "selectCards.fromCard",
    "selectCards.toCard",
    "amount",
  ]);

  const { triggerTransfer } = useTransferFromCardToCard(
    fromCard,
    toCard,
    +amount
  );

  const onSubmit = () => {
    triggerTransfer();
    navigate("/");
  };

  return (
    <FormProvider {...methods}>
      <form className="transfer-form" onSubmit={methods.handleSubmit(onSubmit)}>
        <Typography text="* — fields are required" />

        <CardsSelect cards={cards} />

        <AmountInput />

        {fromCard.currency !== toCard.currency && <ExchangeBlock />}

        <Button size="big" color="green" title="Submit" />
      </form>
    </FormProvider>
  );
};

export const FetchingTransferForm =
  withFetchingTranferData<UserCard>("cards")(TransferForm);
