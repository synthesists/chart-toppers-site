import * as nextRouter from "next/router";
import { NextRouter } from "next/router";

export const mockNextRouter = (mock: Partial<NextRouter>) => {
  return jest.spyOn(nextRouter, "useRouter").mockReturnValue(mock as NextRouter);
};
