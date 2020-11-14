import fc from "fast-check";

export const generateImage = fc.record({
  url: fc.webUrl(),
});

export const generateArtist = fc.record({
  name: fc.string(),
  id: fc.string(),
  images: fc.array(generateImage),
});
