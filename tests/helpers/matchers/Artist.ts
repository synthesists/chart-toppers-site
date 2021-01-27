import { Artist } from "~modules/Artists/data/Artist";
import { assertIsImage } from "./Image";

export const assertIsArtist = (artist: Artist): void => {
  expect(artist).toMatchObject({
    name: expect.any(String),
    id: expect.any(String),
    genres: expect.toBeArrayOf(expect.any(String)),
  });

  artist.images.forEach(assertIsImage);
};
