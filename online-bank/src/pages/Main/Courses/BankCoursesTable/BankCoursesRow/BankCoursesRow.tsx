import React from "react";
import { useGetCourse } from "hooks";
import { Course } from "helpers";
import { Currency } from "type";
import { Typography } from "components/UI";
import "./style.css";

interface BankCoursesRowProps {
  name: string;
  curr: Currency;
  img: string;
}
export const BankCoursesRow: React.FC<BankCoursesRowProps> = ({
  name,
  curr,
  img,
}) => {
  const courseCurrent = useGetCourse(curr, "USD");

  if (!courseCurrent) return;
  return (
    <>
      <div className="coureses-cell__name">
        <img className="coureses__img" src={img} />
        <Typography color="black" size="big" weight="strong" text={name} />
      </div>
      <div>
        <Typography
          color="black"
          size="big"
          weight="strong"
          text={Course.getBankCourse(courseCurrent, "purcashe").toFixed(3)}
        />
      </div>
      <div>
        <Typography
          color="black"
          size="big"
          weight="strong"
          text={Course.getBankCourse(courseCurrent, "sale").toFixed(3)}
        />
      </div>
    </>
  );
};
