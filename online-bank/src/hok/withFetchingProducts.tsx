import React from "react";
import { productAPI } from "services/api";
import { LoadingSpinner } from "components/UI";
import { ProdyctType } from "type";

interface ComponentProps<T> {
  products: T[];
}

export const withFetchingProducts =
  <T,>(productType: ProdyctType) =>
  (Component: React.ComponentType<ComponentProps<T>>) => {
    return () => {
      const { data: products, isFetching } =
        productAPI.useGetProductsQuery(productType);

      if (isFetching) return <LoadingSpinner />;
      if (!products) return <></>;

      return <Component products={products as T[]} />;
    };
  };
