import React from "react";
import { Tabs } from "components";
import { tabs } from "./const";
import { PaymentsAndTransfersList } from "./PaymentsAndTransfersList/PaymentsAndTransfersList";
import { Wrapper } from "components/UI";
import "./style.css";

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
