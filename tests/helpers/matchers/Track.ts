import { Track } from "~modules/Tracks/data/Track";
import { assertIsImage } from "./Image";

export const assertIsTrack = (track: Track): void => {
  expect(track).toMatchObject({
    id: expect.any(String),
    name: expect.any(String),
    previewUrl: expect.toBeSomeOf(expect.any(String), expect.toBeNull()),
    artistIds: expect.toBeArrayOf(expect.any(String)),
    albumId: expect.any(String),
    albumName: expect.any(String),
    weeksInTop100: expect.any(Number),
  });

  track.images.forEach(assertIsImage);
};
