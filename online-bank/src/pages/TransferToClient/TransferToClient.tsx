import React from "react";
import { useNavigate } from "react-router-dom";
import { FormProvider, useForm } from "react-hook-form";
import { withFetchingProducts } from "hoc";
import { UserCard } from "type";
import { AmountInput, CardSelect } from "components";
import { Button, Typography } from "components/UI";
import { useTransfer } from "hooks/useTransfer";

interface TransferToClientFormProps {
  products: UserCard[];
}

export const TransferToClientForm: React.FC<TransferToClientFormProps> = ({
  products,
}) => {
  const navigate = useNavigate();

  const methods = useForm({
    defaultValues: {
      fromCard: products[0],
      amount: "0",
    },
    criteriaMode: "all",
  });

  const [fromCard, amount] = methods.watch(["fromCard", "amount"]);

  const { triggerTransfer } = useTransfer();

  const onSubmit = () => {
    triggerTransfer(fromCard, +amount);
    alert("transfer success");
    navigate("/");
  };

  return (
    <FormProvider {...methods}>
      <form className="transfer-form" onSubmit={methods.handleSubmit(onSubmit)}>
        <Typography text="* — fields are required" />

        <CardSelect
          name={"fromCard"}
          label={"Select card"}
          options={products}
        />

        <AmountInput />

        <Button size="big" color="green" title="Submit" />
      </form>
    </FormProvider>
  );
};

export const FetchingTransferToClientForm =
  withFetchingProducts<UserCard>("cards")(TransferToClientForm);
