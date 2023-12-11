import React from "react";
import "./style.css";

interface SectionHeaderProps {
  title: string;
  size?: "normal" | "small";
}
export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  size = "normal",
}) => {
  return (
    <div className="section-header">
      <h3 className={"section-header__title section-header__title_" + size}>
        {title}
      </h3>
    </div>
  );
};
