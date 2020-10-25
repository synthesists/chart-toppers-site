import React from "react";
import { render, screen } from "@testing-library/react";

import Homepage from "../../../src/pages";

it('should render "Chart Toppers"', () => {
  render(<Homepage />);

  expect(screen.getByText("ChartToppers"));
});
