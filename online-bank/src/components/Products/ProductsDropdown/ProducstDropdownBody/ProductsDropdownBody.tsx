import React, { useContext } from "react";
import { productAPI } from "services/api";
import { ProdyctType } from "type";
import { ProductsList } from "./ProductsList/ProductsList";
import { EmptyContainer } from "./EmptyContainer/EmptyContainer";
import { DropdownContext } from "components/UI";

interface ProductsDropdownBodyProps {
  type: ProdyctType;
}

export const ProductsDropdownBody: React.FC<ProductsDropdownBodyProps> = ({
  type,
}) => {
  const { isOpen } = useContext(DropdownContext);

  const { data: products, isFetching } = productAPI.useGetProductsQuery(type);

  if (!isOpen) return null;

  return (
    <div className={"dropdown__body"}>
      {!isFetching && products?.length ? (
        <ProductsList products={products} productType={type} />
      ) : (
        <EmptyContainer />
      )}
    </div>
  );
};
