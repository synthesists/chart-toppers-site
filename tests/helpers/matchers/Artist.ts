import { Artist, Image } from "../../../src/Artists/data/Artist";

export const assertIsImage = (image: Image): void => {
  expect(image).toEqual({
    url: expect.any(String),
  });
};

export const assertIsArtist = (artist: Artist): void => {
  expect(artist).toMatchObject({
    name: expect.any(String),
    id: expect.any(String),
  });

  artist.images.map(assertIsImage);
};
