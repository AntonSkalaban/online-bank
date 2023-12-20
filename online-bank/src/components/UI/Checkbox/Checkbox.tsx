import React, { ReactNode } from "react";
import "./style.css";

interface CheckboxProps {
  name: string;
  label?: string;
  children?: ReactNode;
  isChecked: boolean;
  selectHandler: (val: Record<string, boolean>) => void;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  name,
  label,
  children,
  isChecked,
  selectHandler,
}) => {
  const hanldeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target;
    selectHandler({ [target.name]: target.checked });
  };

  return (
    <label className="checkbox">
      <input
        type="checkbox"
        name={name}
        onChange={hanldeChange}
        checked={isChecked}
      />
      <span className="checkmark"></span>
      {label || children}
    </label>
  );
};
