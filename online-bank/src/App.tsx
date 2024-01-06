import React from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./components";
import {
  Main,
  PaymentsAndTransfers,
  RequestCard,
  FetchingCardPage,
  Transfer,
  TransferToOtherCard,
  Map,
} from "./pages";
import "./App.css";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />} />
        <Route
          path="payments-and-transfers?/:category"
          element={<PaymentsAndTransfers />}
        />
        <Route path="request">
          <Route path="cards" element={<RequestCard />} />
        </Route>
        <Route path="products">
          <Route path=":productType/:id" element={<FetchingCardPage />} />
          <Route
            path=":productType/:id/transfer/:category"
            element={<Transfer />}
          />
        </Route>
        <Route path="transfer" element={<Transfer />} />
        <Route path="transfer/to-other-card/">
          <Route path={":transferTo"} element={<TransferToOtherCard />} />
        </Route>

        <Route path="map" element={<Map />} />
      </Route>
    </Routes>
  );
};
