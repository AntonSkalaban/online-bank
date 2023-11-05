import React, { ReactNode } from "react";
import "./style.css";

interface TypographyProps {
  tag?: "p" | "span";
  text?: string;
  children?: ReactNode;
  color?: "grey" | "green" | "red";
}

export const Typography = ({
  tag = "p",
  text,
  children,
  color = "grey",
}: TypographyProps) => {
  return tag === "p" ? (
    <p className={`typography typography_${color}`}>{text ?? children}</p>
  ) : (
    <span className={`typography typography_${color}`}>{text ?? children}</span>
  );
};
