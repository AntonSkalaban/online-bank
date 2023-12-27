import React from "react";
import { productAPI } from "services/api";
import { LoadingSpinner } from "components/UI";
import { ProdyctType } from "type";
import { useGetProductByParams } from "hooks";

export const withFetchingTranferData =
  <T,>(productType: ProdyctType) =>
  (Component: React.ComponentType<{ card: T; cards: T[] }>) => {
    return () => {
      const { data: product, isFetching: isFetchingProduct } =
        useGetProductByParams();
      const { data: products, isFetching: isFetchingProducts } =
        productAPI.useGetProductsQuery(productType);

      if (isFetchingProduct || isFetchingProducts) return <LoadingSpinner />;
      if (!product || !products) return <></>;

      return <Component card={product as T} cards={products as T[]} />;
    };
  };
