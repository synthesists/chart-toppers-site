import React, { ReactNode } from "react";
import { act, render } from "@testing-library/react";

export const renderAct = async (Component: ReactNode) => {
  await act(async () => {
    render(<>{Component}</>);
  });
};
