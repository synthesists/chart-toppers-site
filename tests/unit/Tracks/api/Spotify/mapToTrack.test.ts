import fc from "fast-check";
import { mapToTrack } from "../../../../../src/Tracks/api/adapters/Spotify/mapToTrack";
import { Track } from "../../../../../src/Tracks/data/Track";
import { generateTrack } from "../../../../helpers/generators/Spotify/Track";
import { assertIsTrack } from "../../../../helpers/matchers/Track";

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
