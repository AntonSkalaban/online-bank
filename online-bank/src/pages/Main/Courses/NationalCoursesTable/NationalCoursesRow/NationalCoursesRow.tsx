import React from "react";
import { useGetCourse } from "hooks";
import { Currency } from "type";
import { Typography } from "components/UI";
import "./style.css";

interface NationalCoursesRowProps {
  name: string;
  curr: Currency | "PLN";
  img: string;
}

export const NationalCoursesRow: React.FC<NationalCoursesRowProps> = ({
  name,
  curr,
  img,
}) => {
  const courseCurrent = useGetCourse(curr, "USD");
  const coursePrev = useGetCourse(curr, "USD", false);

  if (!courseCurrent || !coursePrev) return;
  const coursesDiff = coursePrev - courseCurrent;
  const isIncreased = coursesDiff > 0;

  return (
    <div className="courses__national-row">
      <div className="coureses-cell__name">
        <img className="coureses__img" src={img} />
        <Typography color="black" size="big" weight="strong" text={name} />
      </div>
      <div>
        <div className="courses__national-cell">
          {" "}
          <Typography
            color="black"
            size="big"
            weight="strong"
            text={courseCurrent.toFixed(3)}
          />
          <Typography color={isIncreased ? "green" : "red"} size="small">
            {isIncreased && "+"}
            {coursesDiff.toFixed(3)}
          </Typography>
        </div>
      </div>
    </div>
  );
};
