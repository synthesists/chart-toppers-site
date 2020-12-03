import { getTrack } from "../../../../src/Tracks/api/adapters/Spotify";
import { assertIsTrack } from "../../../helpers/matchers/Track";

describe("getTrack", () => {
  it("should get the track for an ID", async () => {
    const trackId = "5FbfZj2ZyTSu6RNeJ2Q0bj";

    const track = await getTrack(trackId);

    assertIsTrack(track);
  });
});
