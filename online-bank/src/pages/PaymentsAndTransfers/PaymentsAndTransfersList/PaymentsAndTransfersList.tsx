import React from "react";
import { NavLink } from "react-router-dom";
import { data } from "./const";
import { Typography } from "components/UI";
import Sprites from "assets/svg/transfer.svg";
import "./style.css";

interface PaymentsAndTransfersListProps {
  listCategory: "payments" | "transfers";
}
export const PaymentsAndTransfersList: React.FC<
  PaymentsAndTransfersListProps
> = ({ listCategory }) => {
  return (
    <ul className="payments-and-transfers__list">
      {data[listCategory].map(({ name, imgId, path }) => {
        return (
          <li className="payments-and-transfers__item" key={name}>
            <NavLink className="payments-and-transfers__link" to={path}>
              <div
                className={`${listCategory}__img-container payments-and-transfers__img-container`}
              >
                <svg className="payments-and-transfers__svg">
                  <use href={`${Sprites}#${imgId}`} />
                </svg>
              </div>
              <div className="payments-and-transfers__text-container">
                <Typography
                  color="black"
                  size="big"
                  weight="strong"
                  text={name}
                />
              </div>
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};
