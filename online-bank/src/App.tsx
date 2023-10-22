import React from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./components";
import { Main, Catalog } from "./pages";
import "./App.css";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />} />
        <Route path="catalog" element={<Catalog />} />
      </Route>
    </Routes>
  );
};

export default App;
