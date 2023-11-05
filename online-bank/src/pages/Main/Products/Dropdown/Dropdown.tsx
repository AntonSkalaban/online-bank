import React, { useState } from "react";
import Checkmark from "assets/svg/checkmark.svg";
import Plus from "assets/svg/plus.svg";
import "./style.css";
import { Credit, UserCard } from "type/type";
import { productAPI } from "services/api";
import { NavLink } from "react-router-dom";
import { getCardPircture } from "helpers";

interface DropdownProps {
  name: string;
  type: "credits" | "cards" | "deposits";
}

export const Dropdown: React.FC<DropdownProps> = ({ name, type }) => {
  const [isOpen, setIsOpen] = useState(type === "cards");

  const { data, isFetching } = productAPI.useGetProductsQuery(type);

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
        <NavLink to={"/request-" + type}>
          <span className="dropdown__plus-contaiener">
            <img src={Plus} />
          </span>
        </NavLink>
      </div>

      {isOpen && (
        <div className={"dropdown__body"}>
          {!isFetching && data?.length ? (
            <ul className="dropdown__list">
              {data.map((item) => {
                return (
                  <li className="dropdown__item" key={item._id}>
                    <div className="item__img">
                      {type === "cards" && (
                        <div
                          className={`card-img ${getCardPircture(
                            (item as UserCard).isVirtual,
                            (item as UserCard).paymentSystem
                          )}`}
                        ></div>
                      )}
                    </div>
                    <div className="item__info">
                      <div className="item__top-row item-row">
                        <p className="item__balance">
                          {item.balance} {item.currency}
                        </p>
                        {type === "credits" && <p>{(item as Credit).rate}%</p>}
                      </div>
                      <div className="item__bottom-row item-row">
                        <p>{item.name}</p>
                        {type === "cards" && (
                          <p>
                            &bull;&bull;
                            {(item as UserCard).number.toString().slice(-4)}
                          </p>
                        )}
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          ) : (
            <div className="dropdown__empty-contaner">
              <p className="dropdown__empty-text">
                You don&apos;t have a registered product yet
              </p>
              <a className="dropdown__empty-link">More details</a>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
