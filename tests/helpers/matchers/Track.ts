import { Track } from "../../../src/Tracks/data/Track";

export const assertIsTrack = (track: Track): void => {
  expect(track).toMatchObject({
    id: expect.any(String),
    name: expect.any(String),
    previewUrl: expect.toBeSomeOf(expect.any(String), expect.toBeNull()),
    artistIds: expect.toBeArrayOf(expect.any(String)),
    albumId: expect.any(String),
  });
};
