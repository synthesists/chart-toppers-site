import fc from "fast-check";

export const generateImage = fc.record({
  url: fc.webUrl(),
  width: fc.nat(),
  height: fc.nat(),
});

export const generateArtist = fc.record({
  name: fc.string(),
  id: fc.string(),
  images: fc.array(generateImage),
});
