import fc from "fast-check";
import { generateImage } from "./Image";

export const generateArtist = fc.record({
  name: fc.string(),
  id: fc.string(),
  images: fc.array(generateImage),
  genres: fc.array(fc.string(), { maxLength: 4 }),
});
