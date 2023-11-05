import React from "react";
import "./style.css";

interface SectionHeaderProps {
  title: string;
  type?: string;
}
export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  type = "normal",
}) => {
  return (
    <div className="section-header">
      <h3 className={"section-header__title section-header__title_" + type}>
        {title}
      </h3>
    </div>
  );
};
