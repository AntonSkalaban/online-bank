import React from "react";
import { useParams } from "react-router-dom";
import { FetchingTransferToOtherCardForm } from "./TransferToOtherCardForm/TranferToOtherCardForm";
import { TranferPageLayout } from "components/UI";

export const TransferToOtherCard = () => {
  const { transferTo } = useParams();

  const isTransferToClient = transferTo === "to-bank-client";

  return (
    <TranferPageLayout
      title={
        isTransferToClient
          ? "Transfer to a bank client"
          : "Transfer to non client"
      }
    >
      <FetchingTransferToOtherCardForm />
    </TranferPageLayout>
  );
};
