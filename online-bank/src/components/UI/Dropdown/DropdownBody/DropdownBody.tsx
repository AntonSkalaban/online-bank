import React, { useContext } from "react";
import { DropdownContext } from "components/UI";

interface DropdownBodyProps {
  children: React.ReactNode;
}

export const DropdownBody: React.FC<DropdownBodyProps> = ({ children }) => {
  const { isOpen } = useContext(DropdownContext);

  if (!isOpen) return null;

  return <div className={"dropdown__body"}>{children}</div>;
};
