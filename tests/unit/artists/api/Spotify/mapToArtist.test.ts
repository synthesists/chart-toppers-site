import fc from "fast-check";
import { mapToArtist } from "../../../../../src/artists/api/adapters/Spotify/mapToArtist";
import { Artist } from "../../../../../src/artists/data/Artist";
import { generateArtist } from "../../../../helpers/generators/Artist";
import { assertIsArtist } from "../../../../helpers/matchers/Artist";

describe("mapToArtist", () => {
  it("should map to an Artist", () => {
    fc.assert(
      fc.property(generateArtist, (spotifyArtist) => {
        const artist: Artist = mapToArtist(spotifyArtist);

        assertIsArtist(artist);
      })
    );
  });
});
