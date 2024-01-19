import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FormProvider, useForm } from "react-hook-form";
import { withFetchingProducts } from "hoc";
import { useTransfer } from "hooks";
import { UserCard } from "type";
import { AmountInput, CardInput, CardSelect, PhoneInput } from "components";
import { Button, Select, Typography } from "components/UI";

interface TransferToOtherCardFormProps {
  products: UserCard[];
}
interface FormValues {
  numberType: string;
  cardNumber: string;
  phoneNumber: string;
  fromCard: UserCard;
  amount: string;
}

export const TransferToOtherCardForm: React.FC<
  TransferToOtherCardFormProps
> = ({ products }) => {
  const navigate = useNavigate();
  const { category } = useParams();

  const { triggerTransfer } = useTransfer();

  const isTransferToClient = category === "to-bank-client";

  const methods = useForm({
    defaultValues: {
      numberType: "card",
      cardNumber: "",
      phoneNumber: "",
      fromCard: products[0],
      amount: "",
    },
    criteriaMode: "all",
  });

  const numberType = methods.watch("numberType");

  const onSubmit = (data: FormValues) => {
    const { fromCard, amount, phoneNumber, cardNumber } = data;

    const checkData = {
      date: new Date(),
      fromCard: fromCard.number,
      transferToType: numberType,
      toNumber: phoneNumber || cardNumber,
      amount,
    };

    triggerTransfer(fromCard, isTransferToClient ? +amount : +amount + 2);

    navigate("/check", {
      state: checkData,
    });
  };

  return (
    <FormProvider {...methods}>
      <form className="transfer-form" onSubmit={methods.handleSubmit(onSubmit)}>
        <Typography weight="strong" size="big" color="black">
          {isTransferToClient
            ? "Bank does not charge a commission for transferring funds to a client."
            : "The commission for transferring funds to a non-customer bank is 2"}
        </Typography>

        <Typography text="* — fields are required" />

        <Typography weight="strong" size="big" color="black">
          Find by
        </Typography>

        <Select name="numberType" options={["card", "phone"]} />

        {numberType === "card" ? <CardInput /> : <PhoneInput />}

        <CardSelect name="fromCard" label="Select card" options={products} />

        <AmountInput />

        <Button size="big" color="green" title="Submit" />
      </form>
    </FormProvider>
  );
};

export const FetchingTransferToOtherCardForm = withFetchingProducts<UserCard>(
  "cards"
)(TransferToOtherCardForm);
