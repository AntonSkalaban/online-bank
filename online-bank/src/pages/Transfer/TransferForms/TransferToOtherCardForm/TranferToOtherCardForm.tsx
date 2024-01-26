import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { FormProvider, useForm } from "react-hook-form";
import { withFetchingProducts } from "hoc";
import { useTransfer } from "hooks";
import { OperationsData, UserCard } from "type";
import { AmountInput, CardInput, CardSelect, PhoneInput } from "components";
import { Button, Select, Typography } from "components/UI";

interface TransferToOtherCardFormProps {
  products: UserCard[];
}
interface FormValues {
  topUpBy: string;
  topUpNumber: string;
  fromCard: UserCard;
  amount: string;
}

export const TransferToOtherCardForm: React.FC<
  TransferToOtherCardFormProps
> = ({ products }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { category } = useParams();

  const { triggerTransfer } = useTransfer();

  const methods = useForm({
    defaultValues: (location.state as OperationsData)
      ? { ...location.state, amount: "" }
      : {
          topUpBy: "card",
          topUpNumber: "",
          fromCard: products[0],
          amount: "",
        },
    criteriaMode: "all",
  });

  const topUpBy = methods.watch("topUpBy");
  const isTransferToClient = category === "to-bank-client";

  const onSubmit = (data: FormValues) => {
    triggerTransfer(
      data.fromCard,
      isTransferToClient ? +data.amount : +data.amount + 2
    );

    navigate("/check", {
      state: { date: new Date(), category, ...data },
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

        <Select name="topUpBy" options={["card", "phone"]} />

        {topUpBy === "card" ? <CardInput /> : <PhoneInput />}

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
