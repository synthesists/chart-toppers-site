import fc from "fast-check";
import { generateImage } from "./Image";

const generateAlbum = fc.record({
  id: fc.string(),
  name: fc.string(),
  images: fc.array(generateImage),
});

const generateArtist = fc.record({
  id: fc.string(),
  name: fc.string(),
});

export const generateTrack = fc.record({
  id: fc.string(),
  name: fc.string(),
  preview_url: fc.oneof(fc.constant(null), fc.webUrl()),
  artists: fc.array(generateArtist),
  album: generateAlbum,
  weeksInTop100: fc.nat({ max: 100 }),
});
