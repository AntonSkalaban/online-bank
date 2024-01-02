import React from "react";
import { useNavigate } from "react-router-dom";
import { FormProvider, useForm } from "react-hook-form";
import { withFetchingBetweenCardsSelect } from "hoc";
import { useTransferFromCardToCard } from "hooks";
import { UserCard } from "type";
import { CardsSelect } from "./CardsSelect/CardsSelect";
import { ExchangeBlock } from "./ExchangeBlock/ExchangeBlock";
import { AmountInput } from "components";
import { Button, Typography } from "components/UI";
import "./style.css";

interface TransferFormProps {
  cards: UserCard[];
  topUpCard?: UserCard;
}

export const TransferBetweenForm: React.FC<TransferFormProps> = ({
  cards,
  topUpCard,
}) => {
  const navigate = useNavigate();

  const methods = useForm({
    defaultValues: {
      fromCard: cards[0]._id !== topUpCard?._id ? cards[0] : cards[1],
      toCard: topUpCard ?? cards[1],
      amount: "0",
    },
    criteriaMode: "all",
  });

  const [fromCard, toCard, amount] = methods.watch([
    "fromCard",
    "toCard",
    "amount",
  ]);

  const { triggerTransfer } = useTransferFromCardToCard(
    fromCard,
    toCard,
    +amount
  );

  const onSubmit = () => {
    triggerTransfer();
    alert("transfer success");
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

export const FetchingTransferBetweenForm =
  withFetchingBetweenCardsSelect("cards")(TransferBetweenForm);
