import React, { useState } from "react";
import { Tab } from "type";
import { Typography } from "components/UI";
import "./style.css";

interface TabsProps {
  tabs: Tab[];
  selectedTab: string;
  child: Record<string, React.JSX.Element>;
}

export const Tabs: React.FC<TabsProps> = ({ tabs, selectedTab, child }) => {
  const [selectedCategory, setSelectCategory] = useState(selectedTab);

  return (
    <div className="tabs">
      <ul className="tabs__list">
        {tabs.map(({ title, name }) => {
          const isActive = selectedCategory === name;
          return (
            <li
              key={name}
              className={`nav__item tabs__item nav__link  ${
                isActive ? "nav__link_active" : ""
              }`}
              onClick={() => setSelectCategory(name)}
            >
              <Typography
                color={isActive ? "black" : "grey"}
                size="big"
                weight="strong"
                text={title}
              />
            </li>
          );
        })}
      </ul>

      <div>{child[selectedCategory]}</div>
    </div>
  );
};
