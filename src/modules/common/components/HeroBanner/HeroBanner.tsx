import React, { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const HeroBanner: FC<Props> = ({ children }: Props) => (
  <div className="heroBanner">
    <div className="background-image"></div>
    <div className="heroBanner__title">
      <h2>Chart Toppers</h2>
    </div>
    <div className="heroBanner__inner">{children}</div>
  </div>
);

export default HeroBanner;
