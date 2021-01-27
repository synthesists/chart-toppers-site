import fc from "fast-check";
import { mapToArtist } from "~modules/Artists/api/adapters/Spotify/mapToArtist";
import { Artist } from "~modules/Artists/data/Artist";
import { generateArtist } from "tests/helpers/generators/Spotify/Artist";
import { assertIsArtist } from "tests/helpers/matchers/Artist";

describe("mapToArtist", () => {
  it("should map each generated Spotify artist to an Artist", () => {
    fc.assert(
      fc.property(generateArtist, (spotifyArtist) => {
        const artist: Artist = mapToArtist(spotifyArtist);

        assertIsArtist(artist);
      })
    );
  });
});
