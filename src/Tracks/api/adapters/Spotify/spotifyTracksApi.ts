import Axios from "axios";
import URI from "urijs";
import { GetTrack } from "../..";
import { SPOTIFY_API_URL } from "../../../../config/Spotify";
import { Track } from "../../../data/Track";
import { mapToTrack } from "./mapToTrack";

export const getTrack: GetTrack = async (id: string): Promise<Track> => {
  const url = URI(SPOTIFY_API_URL).segment("tracks").segment(id).toString();
  const { data } = await Axios.get(url);
  return mapToTrack(data);
};
