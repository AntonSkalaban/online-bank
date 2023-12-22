import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { productAPI } from "services/api";
import { ProdyctType } from "type";
import { ProductsList } from "./ProductsList/ProductsList";
import { EmptyContainer } from "./EmptyContainer/EmptyContainer";
import Checkmark from "assets/svg/checkmark.svg";
import Plus from "assets/svg/plus.svg";
import "./style.css";

interface DropdownProps {
  name: string;
  type: ProdyctType;
}

export const Dropdown: React.FC<DropdownProps> = ({ name, type }) => {
  const [isOpen, setIsOpen] = useState(type === "cards");

  const { data: products, isFetching } = productAPI.useGetProductsQuery(type);

  const toggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="dropdown">
      <div className="dropdown__header">
        <div className="dropdown__toggle" onClick={toggle}>
          <h3 className="dropdown__title">{name}</h3>{" "}
          <span
            className={
              "dropdown__checkmark " +
              (isOpen ? "dropdown__checkmark_active" : "")
            }
          >
            <img src={Checkmark} />
          </span>
        </div>
        <NavLink to={"/request/" + type}>
          <span className="dropdown__plus-contaiener">
            <img src={Plus} />
          </span>
        </NavLink>
      </div>

      {isOpen && (
        <div className={"dropdown__body"}>
          {!isFetching && products?.length ? (
            <ProductsList products={products} productType={type} />
          ) : (
            <EmptyContainer />
          )}
        </div>
      )}
    </div>
  );
};
