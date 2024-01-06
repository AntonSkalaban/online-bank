import React from "react";
import { FetchingTransferBetweenForm } from "./TransferForm/TransferBetweenForm";
import { TranferPageLayout } from "components/UI";

export const Transfer = () => {
  return (
    <TranferPageLayout title={"Transfer between your accounts and cards"}>
      <FetchingTransferBetweenForm />
    </TranferPageLayout>
  );
};
