import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { FormProvider, useForm } from "react-hook-form";
import { withFetchingBetweenCardsSelect } from "hoc";
import { useTransferFromCardToCard } from "hooks";
import { OperationsData, UserCard } from "type";
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
  const location = useLocation();
  const { category } = useParams();

  const methods = useForm({
    defaultValues: (location.state as OperationsData)
      ? {
          fromCard: location.state.fromCard,
          toCard: cards.find(
            ({ number }) => number === location.state.topUpNumber
          ) as UserCard,
          amount: "0",
        }
      : {
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

    navigate("/check", {
      state: {
        date: new Date(),
        category,
        fromCard,
        topUpBy: "card",
        topUpNumber: toCard.number,
        amount,
      },
    });
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
