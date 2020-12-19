import Axios from "axios";
import URI from "urijs";

import { GetTracksForArtist } from "../..";
import { SPOTIFY_API_URL } from "../../../../config/Spotify";
import { Track } from "../../../data/Track";
import { mapToTrack } from "./mapToTrack";

export const getTracksForArtist: GetTracksForArtist = async (artistId: string): Promise<Track[]> => {
  const url = URI(SPOTIFY_API_URL).segment("artists").segment(artistId).segment("tracks").toString();
  const { data } = await Axios.get(url);
  return data.map(mapToTrack);
};
