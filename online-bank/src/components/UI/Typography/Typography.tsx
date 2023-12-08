import React, { ReactNode } from "react";
import "./style.css";

interface TypographyProps {
  text?: string | number;
  children?: ReactNode;
  color?: "grey" | "green" | "red" | "white" | "black";
  weight?: "normal" | "normal-plus" | "strong";
  size?: "small" | "normal" | "big";
}

export const Typography = ({
  text,
  children,
  size = "normal",
  color = "grey",
  weight = "normal",
}: TypographyProps) => {
  return (
    <p
      className={`typography typography_${size} typography_${color} typography_${weight}`}
    >
      {text ?? children}
    </p>
  );
};
