import Axios from "axios";
import URI from "urijs";

import { GetTracksForArtist } from "../..";
import { SPOTIFY_API_URL } from "src/config/Spotify";
import { mapToTrack } from "./mapToTrack";
import { Track } from "~modules/Tracks/data/Track";

export const getTracksForArtist: GetTracksForArtist = async (artistId: string): Promise<Track[]> => {
  const url = URI(SPOTIFY_API_URL).segment("artists").segment(artistId).segment("tracks").toString();
  const { data } = await Axios.get(url);
  const tracks: Track[] = data.map(mapToTrack);

  return tracks.sort((a, b) => b.weeksInTop100 - a.weeksInTop100);
};
