import React, { createContext, useRef, useState } from "react";
import { DropdownCheckmark } from "./DropdownCheckmark/DropdownCheckmark";
import { ProductsDropdownHeader } from "components/Products/ProductsDropdown/ProductsDropdownHeader/ProductsDropdownHeader";
import { ProductsDropdownBody } from "components/Products/ProductsDropdown/ProducstDropdownBody/ProductsDropdownBody";
import { DropdownHeader } from "./DropdownHeader/DropdownHeader";
import { DropdownBody } from "./DropdownBody/DropdownBody";
import "./style.css";
import { SelectHeader } from "../Select/SelectHeader/SelectHeader";
import { SelectBody } from "../Select/SelectBody/SelectBody";
import { useOnClickOutside } from "hooks";

export const DropdownContext = createContext({
  isOpen: false,
  toggle: () => {},
});

interface DropdownProps {
  additionalClass?: string;
  children: React.ReactNode;
  isDefOpen: boolean;
  shouldCloseOnClickOutside?: boolean;
}

export const Dropdown = ({
  additionalClass,
  children,
  isDefOpen = false,
  shouldCloseOnClickOutside = false,
}: DropdownProps) => {
  const dropdownRef = useRef(null);

  const [isOpen, setIsOpen] = useState(isDefOpen);

  useOnClickOutside(dropdownRef, () => {
    if (shouldCloseOnClickOutside) setIsOpen(false);
  });

  const toggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <DropdownContext.Provider value={{ toggle, isOpen }}>
      <div className={`dropdown ${additionalClass ?? ""}`} ref={dropdownRef}>
        {children}
      </div>
    </DropdownContext.Provider>
  );
};

Dropdown.Checkmark = DropdownCheckmark;
Dropdown.Header = DropdownHeader;
Dropdown.Body = DropdownBody;
Dropdown.ProductsHeader = ProductsDropdownHeader;
Dropdown.ProductsBody = ProductsDropdownBody;
Dropdown.SelectHeader = SelectHeader;
Dropdown.SelectBody = SelectBody;
