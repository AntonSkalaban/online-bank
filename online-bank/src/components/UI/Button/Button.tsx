import React from "react";
import "./style.css";

interface ButtonProps {
  size: "medium" | "big";
  color?: "green" | "default";
  title: string;
  disabled?: boolean;
  clickHandler: () => void;
}
export const Button: React.FC<ButtonProps> = ({
  size,
  color = "default",
  title,
  disabled = false,
  clickHandler,
}) => {
  return (
    <button
      className={`btn btn_${size} btn_${color}`}
      disabled={disabled}
      onClick={clickHandler}
    >
      {title}
    </button>
  );
};
