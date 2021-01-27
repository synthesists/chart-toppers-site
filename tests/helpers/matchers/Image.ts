import { Image } from "~modules/common/data/Image";

export const assertIsImage = (image: Image): void => {
  expect(image).toEqual({
    url: expect.any(String),
    width: expect.any(Number),
    height: expect.any(Number),
  });
};
