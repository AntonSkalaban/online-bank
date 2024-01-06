import React from "react";
import { useParams } from "react-router-dom";
import { TranferPageLayout } from "components/UI";
import {
  FetchingTransferBetweenForm,
  FetchingTransferToOtherCardForm,
} from "./TransferForms";

type TranferFroms = {
  [key: string]: { title: string; component: React.JSX.Element };
};

const transferForms: TranferFroms = {
  ["between-my-cards"]: {
    title: "Transfer between your accounts and cards",
    component: <FetchingTransferBetweenForm />,
  },
  ["to-bank-client"]: {
    title: "Transfer to a bank client",
    component: <FetchingTransferToOtherCardForm />,
  },
  ["to-non-bank-client"]: {
    title: "Transfer to non client",
    component: <FetchingTransferToOtherCardForm />,
  },
};

export const Transfer = () => {
  const { category } = useParams();

  if (!category) return <p>Error...</p>;
  return (
    <TranferPageLayout title={transferForms[category].title}>
      {transferForms[category].component}
    </TranferPageLayout>
  );
};
