import React from "react";
import { btns, tabs } from "./const";
import { PaymentsAndTransfersList } from "./PaymentsAndTransfersList/PaymentsAndTransfersList";
import { ProductsDropdowns, Services, Sidebar, Tabs } from "components";
import { Wrapper } from "components/UI";
import "./style.css";

const components = {
  payments: <PaymentsAndTransfersList listCategory={"payments"} />,
  transfers: <PaymentsAndTransfersList listCategory={"transfers"} />,
};

export const PaymentsAndTransfers = () => {
  return (
    <div className="page payments-and-transfers-page">
      <div className="payments-and-transfers-page__container">
        <div style={{ width: "100%", backgroundColor: "#f5f5f5" }}>
          <Wrapper>
            <div className="payments-and-transfers-page__box1">
              <ProductsDropdowns />
              <Services btns={btns}>
                <h2 className="payments-and-transfers-page__title">
                  Pay for services without
                  <br /> leaving home
                </h2>
                <div className="payments-and-transfers-page__man"></div>
              </Services>
            </div>
          </Wrapper>
        </div>
        <Wrapper>
          <div className="payments-and-transfers-page__box2">
            <div className="payments-and-transfers-page__main">
              <Tabs tabs={tabs} selectedTab={"payments"} child={components} />
            </div>

            <Sidebar />
          </div>
        </Wrapper>
      </div>
    </div>
  );
};
