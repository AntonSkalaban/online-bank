import React, { useState } from "react";
import Checkmark from "assets/svg/checkmark.svg";
import Plus from "assets/svg/plus.svg";
import "./style.css";
import { Card, Credit } from "type/type";

interface DropdownProps {
  title: string;
  data: Card[] | Credit[];
}

export const Dropdown: React.FC<DropdownProps> = ({ title, data }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="dropdown">
      <div className="dropdown__header">
        <div className="dropdown__toggle" onClick={toggle}>
          <h3 className="dropdown__title">{title}</h3>{" "}
          <span
            className={
              "dropdown__checkmark " +
              (isOpen ? "dropdown__checkmark_active" : "")
            }
          >
            <img src={Checkmark} />
          </span>
        </div>
        <span className="dropdown__plus-contaiener">
          <img src={Plus} />
        </span>
      </div>

      {isOpen && (
        <div className={"dropdown__body"}>
          {data?.length ? (
            <ul className="dropdown__list">
              {data.map((item) => {
                return (
                  <li className="dropdown__item" key={item.name}>
                    <div className="item__img"></div>
                    <div className="item__info">
                      <div className="item__top-row item-row">
                        <p className="item__balance">
                          {item.balance} {item.currency}
                        </p>
                        {title === "Credits" && <p>{(item as Credit).rate}%</p>}
                      </div>
                      <div className="item__bottom-row item-row">
                        <p>{item.name}</p>
                        {title === "Cards" && (
                          <p>
                            &bull;&bull;
                            {(item as Card).number.toString().slice(-4)}
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
