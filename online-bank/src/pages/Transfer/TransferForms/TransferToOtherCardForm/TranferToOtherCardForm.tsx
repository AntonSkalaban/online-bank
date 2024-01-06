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

export const TransferToOtherCardForm: React.FC<
  TransferToOtherCardFormProps
> = ({ products }) => {
  const navigate = useNavigate();
  const { transferTo } = useParams();

  const { triggerTransfer } = useTransfer();

  const isTransferToClient = transferTo === "to-bank-client";

  const methods = useForm({
    defaultValues: {
      numberType: "Card",
      cardNumber: "",
      phoneNumber: "",
      fromCard: products[0],
      amount: "",
    },
    criteriaMode: "all",
  });

  const [numberType, fromCard, amount] = methods.watch([
    "numberType",
    "fromCard",
    "amount",
  ]);

  const onSubmit = () => {
    triggerTransfer(fromCard, isTransferToClient ? +amount : +amount + 2);
    alert("transfer success");
    navigate("/");
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

        <Select name="numberType" options={["Card", "Phone"]} />

        {numberType === "Card" ? <CardInput /> : <PhoneInput />}

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
