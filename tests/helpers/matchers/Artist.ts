import { Artist, Image } from "../../../src/artists/data/Artist";

export const assertIsImage = (image: Image): void => {
  expect(image).toEqual({
    url: expect.any(String),
  });
};

export const assertIsArtist = (artist: Artist): void => {
  expect(artist).toEqual({
    name: expect.any(String),
    id: expect.any(String),
    image: expect.toBeSomeOf(expect.any(Object), expect.toBeNull()),
  });

  if (artist.image !== null) {
    assertIsImage(artist.image);
  }
};
