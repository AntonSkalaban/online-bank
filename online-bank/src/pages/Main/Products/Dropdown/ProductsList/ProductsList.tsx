import React from "react";
import { NavLink } from "react-router-dom";
import { UserCredit, UserCard, ProdyctType, UserDeposit } from "type";
import { Card, Credit, Deposit } from "./ProductsItems";
import "./style.css";

interface ProductsListProps {
  products: UserCard[] | UserCredit[] | UserDeposit[];
  productType: ProdyctType;
}

const components = {
  cards: (product: UserCard) => <Card card={product} />,
  credits: (product: UserCredit) => <Credit credit={product} />,
  deposits: (product: UserDeposit) => <Deposit deposit={product} />,
};

export const ProductsList: React.FC<ProductsListProps> = ({
  products,
  productType,
}) => {
  return (
    <ul className="products__list">
      {" "}
      {products.map((product) => {
        return (
          <li className="products__list-item" key={product._id}>
            <NavLink to={`products/${productType}/${product._id}`}>
              {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
              {components[productType](product as any)}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};
