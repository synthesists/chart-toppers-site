import fc from "fast-check";
import { mapToTrack } from "~modules/Tracks/api/adapters/Spotify/mapToTrack";
import { Track } from "~modules/Tracks/data/Track";
import { generateTrack } from "tests/helpers/generators/Spotify/Track";
import { assertIsTrack } from "tests/helpers/matchers/Track";

describe("mapToTrack", () => {
  it("should map each generated Spotify track to a Track", () => {
    fc.assert(
      fc.property(generateTrack, (spotifyTrack) => {
        const track: Track = mapToTrack(spotifyTrack);

        assertIsTrack(track);
      })
    );
  });
});
