import React from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./components";
import {
  Main,
  Catalog,
  RequestCard,
  FetchingCardPage,
  Transfer,
} from "./pages";
import "./App.css";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />} />
        <Route path="catalog" element={<Catalog />} />
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
      </Route>
    </Routes>
  );
};

export default App;
