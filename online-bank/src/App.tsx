import React from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./components";
import {
  Main,
  PaymentsAndTransfers,
  History,
  Check,
  RequestCard,
  RequestCredit,
  FetchingCardPage,
  Transfer,
  Map,
} from "./pages";
import "./App.css";
import { Favorite } from "pages/Favorite/Favorite";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />} />
        <Route path="history" element={<History />} />
        <Route
          path="payments-and-transfers/:category"
          element={<PaymentsAndTransfers />}
        />
        <Route path="request">
          <Route path="cards" element={<RequestCard />} />
          <Route path="credits" element={<RequestCredit />} />
        </Route>
        <Route path="products">
          <Route path=":productType/:id" element={<FetchingCardPage />} />
          <Route
            path=":productType/:id/transfer/:category"
            element={<Transfer />}
          />
        </Route>

        <Route path="favorite" element={<Favorite />} />
        <Route path="transfer">
          <Route path={":category"} element={<Transfer />} />
        </Route>
        <Route path="check" element={<Check />} />
        <Route path="map" element={<Map />} />
      </Route>
    </Routes>
  );
};
