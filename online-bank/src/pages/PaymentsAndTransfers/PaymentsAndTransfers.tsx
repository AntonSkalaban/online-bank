import React from "react";
import "./style.css";
import { Tabs } from "components";
import { tabs } from "./const";
import { PaymentsAndTransfersList } from "./PaymentsAndTransfersList/PaymentsAndTransfersList";
import { Wrapper } from "components/UI";

const components = {
  payments: <PaymentsAndTransfersList listCategory={"payments"} />,
  transfers: <PaymentsAndTransfersList listCategory={"transfers"} />,
};

export const PaymentsAndTransfers = () => {
  return (
    <div className="page payments-and-transfers-page">
      <Wrapper>
        <Tabs tabs={tabs} selectedTab={"payments"} child={components} />
      </Wrapper>
    </div>
  );
};
