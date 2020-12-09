import fc from "fast-check";
import { mapToArtist } from "../../../../../src/Artists/api/adapters/Spotify/mapToArtist";
import { Artist } from "../../../../../src/Artists/data/Artist";
import { generateArtist } from "../../../../helpers/generators/Spotify/Artist";
import { assertIsArtist } from "../../../../helpers/matchers/Artist";

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
