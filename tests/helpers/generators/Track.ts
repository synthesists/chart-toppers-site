import fc from "fast-check";

const generateAlbum = fc.record({
  id: fc.string(),
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
});
