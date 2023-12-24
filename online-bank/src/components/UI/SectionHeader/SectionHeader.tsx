import React from "react";
import "./style.css";

interface SectionHeaderProps {
  children?: React.ReactNode;
  title?: string;
  size?: "big" | "normal" | "small";
}
export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  children,
  size = "normal",
}) => {
  return (
    <div className="section-header">
      <h3 className={"section-header__title section-header__title_" + size}>
        {title || children}
      </h3>
    </div>
  );
};
