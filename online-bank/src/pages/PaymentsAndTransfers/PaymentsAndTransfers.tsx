import React from "react";
import { useParams } from "react-router-dom";
import { btns, tabs } from "./const";
import { PaymentsAndTransfersList } from "./PaymentsAndTransfersList/PaymentsAndTransfersList";
import { Products, Services, Sidebar, Tabs } from "components";
import { Wrapper } from "components/UI";
import "./style.css";

const components = {
  payments: <PaymentsAndTransfersList listCategory={"payments"} />,
  transfers: <PaymentsAndTransfersList listCategory={"transfers"} />,
};

export const PaymentsAndTransfers = () => {
  const { category } = useParams();
  if (!category) return;
  return (
    <div className="page payments-and-transfers-page">
      <div className="grey-row">
        <Wrapper>
          <div className="grid grid-top">
            <div className="products-wrapper ">
              <Products />
            </div>
            <div style={{ height: "200px" }}>
              <Services btns={btns}>
                <h2 className="payments-and-transfers-page__title">
                  Pay for services without
                  <br /> leaving home
                </h2>
                <div className="payments-and-transfers-page__man"></div>
              </Services>
            </div>
          </div>
        </Wrapper>
      </div>
      <Wrapper>
        <div className="grid grid-3clmn ">
          <div className="grid-main">
            <Tabs
              tabs={tabs}
              selectedTab={
                category === "payments" || category === "transfers"
                  ? category
                  : "payments"
              }
              child={components}
            />
          </div>

          <Sidebar />
        </div>
      </Wrapper>
    </div>
  );
};
