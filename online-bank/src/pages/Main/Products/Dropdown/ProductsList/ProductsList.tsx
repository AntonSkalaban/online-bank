import React from "react";
import { UserCredit, UserCard, ProdyctType, UserDeposit } from "type";
import { CreditsList } from "./CreditsList";
import { CardsList } from "./CardsList";
import { DepositsList } from "./DepositsList";
import "./style.css";

interface ProductsListProps {
  products: UserCard[] | UserCredit[] | UserDeposit[];
  productType: ProdyctType;
}

export const ProductsList: React.FC<ProductsListProps> = ({
  products,
  productType,
}) => {
  const components = {
    cards: <CardsList cards={products as UserCard[]} />,
    credits: <CreditsList credits={products as UserCredit[]} />,
    deposits: <DepositsList deposits={products as UserDeposit[]} />,
  };

  return <>{components[productType]}</>;
};
