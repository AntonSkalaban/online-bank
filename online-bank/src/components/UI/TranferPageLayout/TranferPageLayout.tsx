import React from "react";
import { GoBackBtn, SectionHeader, Wrapper } from "components/UI";

interface TranferPageLayoutProps {
  title: string;
  children: React.ReactNode;
}
export const TranferPageLayout: React.FC<TranferPageLayoutProps> = ({
  title,
  children,
}) => {
  return (
    <div className="page transfer-page">
      <Wrapper>
        <section>
          <SectionHeader size="big">
            {" "}
            <GoBackBtn />
            {title}
          </SectionHeader>

          {children}
        </section>
      </Wrapper>
    </div>
  );
};
