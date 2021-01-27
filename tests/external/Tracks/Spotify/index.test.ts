import { getTracksForArtist } from "~modules/Tracks/api/adapters/Spotify";
import { assertIsTrack } from "tests/helpers/matchers/Track";

describe("Spotify Track Adapter", () => {
  describe("getTracksForArtist", () => {
    it("should get all tracks for an artist", async () => {
      const artistId = "5K4W6rqBFWDnAN6FQUkS6x";

      const tracks = await getTracksForArtist(artistId);

      tracks.forEach(assertIsTrack);
    });
  });
});
