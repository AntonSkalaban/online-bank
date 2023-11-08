import React, { ReactNode } from "react";
import "./style.css";

interface TypographyProps {
  tag?: "p" | "span";
  text?: string;
  children?: ReactNode;
  color?: "grey" | "green" | "red" | "white";
  weight?: "normal" | "strong";
}

export const Typography = ({
  tag = "p",
  text,
  children,
  color = "grey",
  weight = "normal",
}: TypographyProps) => {
  return tag === "p" ? (
    <p className={`typography typography_${color} typography_${weight}`}>
      {text ?? children}
    </p>
  ) : (
    <span className={`typography typography_${color} typography_${weight}`}>
      {text ?? children}
    </span>
  );
};
