import Arrow from "assets/svg/transfer-between.svg";
import Checkmark from "assets/svg/checkmark-in-circle.svg";

export const data = {
  payments: [{ name: "ERIP", img: Arrow, path: "ERIP" }],
  transfers: [
    {
      name: "Between your accounts and cards",
      img: Arrow,
      path: "/transfer",
    },
    {
      name: "To a bank client",
      img: Checkmark,
      path: "",
    },
  ],
};
