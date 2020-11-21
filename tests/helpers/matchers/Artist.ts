import { Artist, Image } from "../../../src/Artists/data/Artist";

export const assertIsImage = (image: Image): void => {
  expect(image).toEqual({
    url: expect.any(String),
    width: expect.any(Number),
    height: expect.any(Number),
  });
};

export const assertIsArtist = (artist: Artist): void => {
  expect(artist).toMatchObject({
    name: expect.any(String),
    id: expect.any(String),
  });

  artist.images.map(assertIsImage);
};
